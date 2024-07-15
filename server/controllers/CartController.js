const ShoppingCart = require("../models/CartModel");
const Product = require("../models/ProductModel");
const CartController = {
  CreateCart: async (req, res, next) => {
    try {
      const { user } = req.body;
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
        res.status(200).send({ success: true, data: savedCart });
      }
    } catch (error) {
      console.error("Error creating cart:", error.message);
      next(error);
    }
  },
  AddToCart: async (req, res, next) => {
    try {
      const { user, product, quantity } = req.body;
      const fetchProduct = await Product.findById(product);
      const productPrice = fetchProduct.price;
      const cart = await ShoppingCart.findOneAndUpdate(
        { user: user },
        {
          $inc: { totalPrice: quantity * productPrice },
          $push: {
            items: {
              product: product,
              quantity: quantity,
              totalPrice: quantity * productPrice,
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
