const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: "products", required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  shippingAddress: { type: String, required: true },
  seller: { type: Schema.Types.ObjectId, required: true },
  sellerAddress: { type: String, required: true},
  orderDate: { type: Date, default: Date.now },
  currentState: { type: String, required: true },
  isDelivered: { type: Boolean, required: true },
  user: { type: Schema.Types.ObjectId, ref: "users", required: true },
});

const order = mongoose.model("order", OrderSchema);

module.exports = order;
