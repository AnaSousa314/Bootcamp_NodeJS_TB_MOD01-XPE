require('dotenv').config()
const express = require("express");
const app = express();

const router = require("./routes/routes");

app.use(router);
app.use(express.json());

app.listen(process.env.PORT, ()=>{
  console.log(`Server started at http://localhost:${process.env.PORT}`);
});