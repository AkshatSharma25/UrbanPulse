const User=require("../models/UserModel");
const bcrypt=require("bcrypt");
const Order=require("../models/OrderModel");
const UserController={
    CreateUser:async(req,res,next)=>{
        try{
            const {username,email,password,profilePicture,address}=req.body;
            const hashedPassword=await bcrypt.hash(password,10);
            const newUser=new User({username,email,password:hashedPassword,address,profilePicture});
            const savedUser=await newUser.save();
            const newObj={
                username:savedUser.username,
                email:savedUser.email,
                profilePicture: savedUser.profilePicture,
                createdAt: savedUser.createdAt,
                address: savedUser.address,
                _id: savedUser._id,
                cart: savedUser.cart,
            }
            res.status(200).send({success:true,data:newObj});
        }
        catch(error){
            console.error("Error creating user:",error.message);
            next(error);
        }
    },
    UpdateUserById:async(req,res,next)=>{
        try{
            const {id}=req.params;

            const updatedUser=await User.findByIdAndUpdate(id,req.body,{new:true});
            if(updatedUser){
                const newObj={
                    username:updatedUser.username,
                    email:updatedUser.email,
                    profilePicture: updatedUser.profilePicture,
                    createdAt: updatedUser.createdAt,
                    address: updatedUser.address,
                    _id: updatedUser._id,
                    cart: updatedUser.cart,
                }
                res.status(200).send({success:true,data:newObj});
            }
            else{
                res.status(404).send({success:false,message:"User not found"});
            }
        }
        catch(error){
            console.error("Error updating user:",error.message);
            next(error);
        }
    },
    GetUser:async(req,res,next)=>{
        try{
            const {email,password}=req.params;
            let foundUser=await User.find({email:email});
            if(foundUser.length!==0){
                const comparePassword=await bcrypt.compare(password,foundUser[0].password);

                if(comparePassword===true){
                    const newObj={
                        username:foundUser[0]["username"],
                        email:foundUser[0]["email"],
                        profilePicture:foundUser[0]["profilePicture"],
                        createdAt:foundUser[0]["createdAt"],
                        address:foundUser[0]["address"],
                        _id:foundUser[0]["_id"],
                        cart: foundUser[0]["cart"],
                    }
                    res.status(200).send({success:true,data:newObj});
                }
                else{
                    res.status(401).send({success:false,message:"Invalid Password"});
                }
            }
            else{
                res.status(404).send({success:false,message:"User not found"});
            }
        }
        catch(error){
            console.error("Error getting user:",error.message);
            next(error);
        }
    },
    getOrders:async (req,res,next)=>{
        const user=req.params.user;
        try{
            const foundUser=await User.findById(user);
            if(foundUser){
                let myOrders=[];
                for(let order of foundUser.orders){
                    // console.log(order)
                    const orderDetails=await Order.findById(order);
                    if(orderDetails){
                        myOrders.push(orderDetails);
                    }
                }
                res.status(200).send({success:true,data:myOrders});
                
            }
            else{
                res.status(404).send({success:false,message:"User not found"});
            }
        }
        catch(error){
            console.error("Error getting orders:",error.message);
            next(error);
        }
    }
    
}

module.exports=UserController;