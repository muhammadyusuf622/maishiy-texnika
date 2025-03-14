const exp = require("constants");
const { config } = require("dotenv");
const express = require("express");
const productRoute = require("./src/route/product.route");
const {join} = require("node:path");

config()

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", join(process.cwd(), "src", "views"));

app.use("/api/v1", productRoute)

app.listen(+process.env.APP_PORT, () => {
  console.log(`localhost:${+process.env.APP_PORT}`)
})