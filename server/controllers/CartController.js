const ShoppingCart = require("../models/CartModel");
const User = require("../models/UserModel");
const Product = require("../models/ProductModel");
const CartController = {
  CreateCart: async (req, res, next) => {
    try {
      const { user } = req.body;
      console.log(req.body);
      
      const IfExist = await ShoppingCart.find({ user: user });
      // console.log(IfExist);
      
      if (IfExist.length != 0) {
        res
          .status(400)
          .send({
            success: false,
            message: "Cart already exists for this user",
          });
      } else {
        const newCart = new ShoppingCart({ user });
        const savedCart = await newCart.save();
        const updatedUser=await User.findByIdAndUpdate(user,{$set:{cart:savedCart._id}},{new:true});
        const newObj={
          username: updatedUser.username,
          email: updatedUser.email,
          profilePicture: updatedUser.profilePicture,
          createdAt: updatedUser.createdAt,
          address: updatedUser.address,
          _id: updatedUser._id,
          cart: savedCart._id,
        }
        res.status(200).send({ success: true, data: newObj });
      }
    } catch (error) {
      console.error("Error creating cart:", error.message);
      next(error);
    }
  },
  AddToCart: async (req, res, next) => {
    try {
      const { user, product, } = req.body;
      const fetchProduct = await Product.findById(product);
      const productPrice = fetchProduct.price;
      const cart = await ShoppingCart.findOneAndUpdate(
        { user: user },
        {
          
          $push: {
            items: {
              product: product,
            },
          },
        },
        { new: true, upsert: true }
      );
      res.status(200).send({ success: true, data: cart });
    } catch (error) {
      console.error("Error adding to cart:", error.message);
      next(error);
    }
  },
  getAllItems:async(req,res,next)=>{
    try{
      // console.log(req.body);
      const {id}=req.params;
      console.log(id);

      const cart=await ShoppingCart.find({user:id});
      console.log(cart);

      res.status(200).send({ success: true, data: cart});
    }
    catch(error){
      console.error("Error getting all items:",error.message);
      next(error);
    }
  },
  RemoveFromCart: async (req, res, next) => {
    try {
      const { user, product, } = req.body;
      const cart = await ShoppingCart.findOneAndUpdate(
        { user: user },
        {
          
          $pull: {
            items: {
              product: product,
            },
          },
        },
        { new: true, upsert: true }
      );
      res.status(200).send({ success: true, data: cart });
    } catch (error) {
      console.error("Error adding to cart:", error.message);
      next(error);
    }
  },
};

module.exports = CartController;
