const Product = require("../models/ProductModel");

const ProductController = {
  CreateProduct: async (req, res, next) => {
    try {
      const { name, imageUrls, price,seller, category, description, stockQuantity,subCategory,color,tagLine} =
        req.body;
      const newProduct = new Product({
        name,
        imageUrls,
        price,
        tagLine,
        category,
        description,
        stockQuantity,
        subCategory,
        seller
      });

      const savedProduct = await newProduct.save();
      console.log(savedProduct);
      res.status(200).send({ success: true, data: savedProduct });
    } catch (error) {
      console.error("Error creating product:", error.message);
      next(error);
    }
  },
  Fetch:async(req, res, next) => {
    try{
      const id=req.params.id;
      const product = await Product.findById(id);
      if(product){
        res.status(200).send({success:true,data:product});
      }
      else{
        res.status(404).send({success:false,message:"no product found!"});
      }
    }
    catch(error){
      next(error);
    }
  },
  FetchByCategory: async (req, res, next) => {
    try {
      const { category } = req.params;
      console.log(category);
      const FoundProducts = await Product.find({ category: category });
      if (FoundProducts) {
        res.status(200).send({ success: true, data: FoundProducts });
      } else {
        res
          .status(404)
          .send({
            success: false,
            message: "No products found in this category",
          });
      }
    } catch (error) {
      next(error);
    }
  },
  FetchByPrice: async (req, res, next) => {
    try {
      const { category, price } = req.body;
      const FoundProducts = await Product.find({
        category: category,
        price: { $lte: price },
      });
      if (FoundProducts) {
        res.status(200).send({ success: true, data: FoundProducts });
      } else {
        res
          .status(404)
          .send({
            success: false,
            message: "No products found in price range",
          });
      }
    } catch (error) {
      next(error);
    }
  },
  SearchByKeyword: async (req, res, next) => {
    try {
      const { keyword } = req.params;
      const FoundProducts = await Product.find({
        name:keyword,
      });
      if (FoundProducts) {
        res.status(200).send({ success: true, data: FoundProducts });
      } else {
        res.status(404).send({ success: false, message: "No products found" });
      }
    } catch (error) {
      next(error);
    }
  }
};

module.exports = ProductController;
