const { Router } = require("express");
const { getAllProducts, createProduct, deleteById } = require("../controllers/product.controller");

const productRoute = Router()

productRoute.get("/products", getAllProducts);

productRoute.post("/products", createProduct);

productRoute.delete("/products/:id", deleteById)

module.exports = productRoute;
