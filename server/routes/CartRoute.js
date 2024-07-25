const CartController = require("../controllers/CartController");
const CartRoute=require("express").Router();

CartRoute.post("/create",CartController.CreateCart);
CartRoute.put("/addtocart",CartController.AddToCart);
CartRoute.get("/getallitems/:id",CartController.getAllItems);
CartRoute.put("/removefromcart",CartController.RemoveFromCart);
module.exports = CartRoute;