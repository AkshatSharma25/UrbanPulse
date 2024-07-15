const ProductRouter=require("express").Router();
const ProductController=require("../controllers/ProductController");

ProductRouter.post("/create",ProductController.CreateProduct);
ProductRouter.get("/fetchbycategory",ProductController.FetchByCategory);
ProductRouter.get("/fetchbyprice",ProductController.FetchByPrice);
module.exports=ProductRouter;