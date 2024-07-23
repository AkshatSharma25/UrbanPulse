const express = require("express");
const helmet=require("helmet");
const cors=require("cors");
const path=require("path");
const morgan=require("morgan");
const mongoose=require("mongoose");
require("dotenv").config();
const Upload=require("./MulterConfig");
const ProductRouter=require("./routes/ProductRoute");
const UserRouter=require("./routes/UserRoute");
const CartRouter=require("./routes/CartRoute");
const OrderRouter=require("./routes/OrderRoute");
const app = express();

app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/products",ProductRouter);
app.use("/api/users",UserRouter);
app.use("/api/carts",CartRouter);
app.use("/api/orders",OrderRouter);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT=process.env.PORT;
const MONGO_URL=process.env.MONGO_URL;
mongoose.connect(MONGO_URL).then(console.log("connected to database"))


app.post('/upload', Upload.single('file'), (req, res) => {
    res.send("success");
  });

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});