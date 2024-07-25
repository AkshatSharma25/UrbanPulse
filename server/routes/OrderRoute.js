const OrderRoute=require("express").Router();
const OrderController=require("../controllers/OrderController");

OrderRoute.post("/create",OrderController.createOrder);
OrderRoute.delete("/delete/:orderId",OrderController.deleteOrder);
module.exports = OrderRoute;