const mongoose = require('mongoose');
const Schema = mongoose.Schema;

  const productSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    tagLine:{
      type:String,
      required:true
    },
    category: {
      type: String,
      required: true
    },
    subCategory: {
      type:String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },
    imageUrls: {
      type: [String],
      required: true
    },
    description: {
      type: String,
      required: true
    },
    color:{
      type: [String],
    },
    stockQuantity: {
      type: Number,
      default: 0
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    size:{
      type:[String],
    },
    ratings:{
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    reviews:{
      type:[],
      default:[],
    },
    seller:{
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    }
  });
productSchema.index({ name: 'text', category: 'text',description: 'text'});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
