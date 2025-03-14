const { Router } = require("express");
const { getAllProducts, createProduct } = require("../controllers/product.controller");

const productRoute = Router()

productRoute.get("/products", getAllProducts);

productRoute.post("/products", createProduct

)

module.exports = productRoute;