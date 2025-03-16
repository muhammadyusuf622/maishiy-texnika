const errorMiddleware = require("./middleware/errorMiddleware");
const { config } = require("dotenv");
const express = require("express");
const productRoute = require("./route/product.route");
const {join} = require("node:path");
const categoryRoute = require("./route/category.route");

config()

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", join(process.cwd(), "src", "views"));

app.use("/api/v1/products", productRoute);
app.use("/api/v1/categories", categoryRoute);

app.use((req,res) => {
  res.status(404).send({
    status:"error",
    message:"Bunday api mavjud emas"
  });
});

app.use(errorMiddleware);

const PORT = parseInt(process.env.APP_PORT, 10) || 5000;
app.listen(PORT, () => {
  console.log(`localhost:${PORT}`)
})