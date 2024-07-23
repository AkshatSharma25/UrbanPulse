const CartController = require("../controllers/CartController");
const CartRoute=require("express").Router();

CartRoute.post("/create",CartController.CreateCart);
CartRoute.put("/addtocart",CartController.AddToCart);
module.exports = CartRoute;