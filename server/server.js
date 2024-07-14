const express = require("express");
const helmet=require("helmet");
const morgan=require("morgan");
require("dotenv").config();
const app = express();

app.use(helmet());
app.use(morgan("dev"));


const PORT=process.env.PORT;
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
  });