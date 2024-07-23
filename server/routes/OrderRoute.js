const OrderRoute=require("express").Router();
const OrderController=require("../controllers/OrderController");

OrderRoute.post("/create",OrderController.createOrder);

module.exports = OrderRoute;