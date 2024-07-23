const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  address:{
    type: String,
    default:'',
    lowercase:true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  profilePicture: {
    type: String,
    default: ''
  },
  orders:{
    type: [Schema.Types.ObjectId],
    ref: 'Order'
  },
  isSeller:{
    type: Boolean,
    default: false
  },
  soldProducts:{
    type: [Schema.Types.ObjectId],
    ref: 'Product'
  },
  cart:{
    type: Schema.Types.ObjectId,
    ref: 'ShoppingCart'
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
