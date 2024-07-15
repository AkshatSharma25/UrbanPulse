const Product = require("../models/ProductModel");

const ProductController = {
  CreateProduct: async (req, res, next) => {
    try {
      const { name, imageUrl, price, category, description, stockQuantity } =
        req.body;

      const newProduct = new Product({
        name,
        imageUrl,
        price,
        category,
        description,
        stockQuantity,
      });

      const savedProduct = await newProduct.save();
      console.log(savedProduct);
      res.status(200).send({ success: true, data: savedProduct });
    } catch (error) {
      console.error("Error creating product:", error.message);
      next(error);
    }
  },
  FetchByCategory: async (req, res, next) => {
    try {
      const { category } = req.body;
      const FoundProducts = await Product.find({ category: category });
      if (FoundProducts) {
        // console.log(FoundProducts);
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
};

module.exports = ProductController;
