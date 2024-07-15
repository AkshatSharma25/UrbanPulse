const User=require("../models/UserModel");

const UserController={
    CreateUser:async(req,res,next)=>{
        try{
            const {username,email,password}=req.body;
            const newUser=new User({username,email,password});
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
    
}

module.exports=UserController;