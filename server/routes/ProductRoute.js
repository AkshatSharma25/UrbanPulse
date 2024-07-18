const ProductRouter=require("express").Router();
const ProductController=require("../controllers/ProductController");

ProductRouter.post("/create",ProductController.CreateProduct);
ProductRouter.get("/fetchbycategory/:category",ProductController.FetchByCategory);
ProductRouter.get("/fetchbyprice",ProductController.FetchByPrice);
ProductRouter.get("/fetch/:id",ProductController.Fetch);
ProductRouter.get("/search/:keyword",ProductController.SearchByKeyword);
module.exports=ProductRouter;