const User=require("../models/UserModel");

const UserController={
    CreateUser:async(req,res,next)=>{
        try{
            const {username,email,password,profilePicture,address}=req.body;
            const newUser=new User({username,email,password,address,profilePicture});
            const savedUser=await newUser.save();
            res.status(200).send({success:true,data:savedUser});
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
                res.status(200).send({success:true,data:updatedUser});
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
            console.log(req.params)
            console.log(email,password);
            let foundUser=await User.find({email:email,password:password});
            if(foundUser.length!==0){
                console.log(foundUser)
                const newObj={
                    username:foundUser[0]["username"],
                    email:foundUser[0]["email"],
                    profilePicture:foundUser[0]["profilePicture"],
                    createdAt:foundUser[0]["createdAt"],
                    address:foundUser[0]["address"]
                }
                res.status(200).send({success:true,data:newObj});
            }
            else{
                res.status(404).send({success:false,message:"User not found"});
            }
        }
        catch(error){
            console.error("Error getting user:",error.message);
            next(error);
        }
    }
    
}

module.exports=UserController;