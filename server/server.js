const express = require("express");
const helmet=require("helmet");
const morgan=require("morgan");
const mongoose=require("mongoose");
require("dotenv").config();
const ProductRouter=require("./routes/ProductRoute");
const UserRouter=require("./routes/UserRoute");
const CartRouter=require("./routes/CartRoute");
const app = express();

app.use(helmet());

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/products",ProductRouter);
app.use("/api/users",UserRouter);
app.use("/api/carts",CartRouter);

const PORT=process.env.PORT;
const MONGO_URL=process.env.MONGO_URL;
mongoose.connect(MONGO_URL).then(console.log("connected to database"))

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});