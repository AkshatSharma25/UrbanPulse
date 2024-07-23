const order = require("../models/OrderModel");
const User = require("../models/UserModel");
const OrderController = {
  createOrder: async (req, res, next) => {
    try {
      const {
        product,
        price,
        quantity,
        seller,
        orderDate,
        currentState,
        isDelivered,
        user,
      } = req.body;
      let shippingAddress;
      let sellerAddress;
      const fetchUser = await User.findById(user);
      if (fetchUser) {
        const fetchSeller = await User.findById(seller);
        if (fetchSeller) {
          const upadateSeller = await User.findByIdAndUpdate();
          shippingAddress = fetchUser.address;
          sellerAddress = fetchSeller.address;
          const newOrder = new order({
            product,
            price,
            shippingAddress,
            quantity,
            seller,
            orderDate,
            currentState,
            sellerAddress,
            isDelivered,
            user,
          });
          await newOrder.save();
          const updateUser=await User.findByIdAndUpdate(user,{
            $push: {
              orders: newOrder._id,
            },
          });
          await updateUser.save({new:true});
          if (newOrder) {
            res.status(200).send({ success: true, data: newOrder });
          } else {
            res
              .status(400)
              .send({ success: false, message: "Error creating order!" });
          }
        } else {
          res.send(400).send({ success: false, message: "seller not found" });
        }
      } else {
        res.send(400).send({ success: false, message: "buyer not found" });
      }
    } catch (error) {
      console.error("Error creating order:", error.message);
      next(error);
    }
  },
};
module.exports = OrderController;
