const { Router } = require("express");
const { getAllProducts, createProduct, deleteById, getProductById } = require("../controllers/product.controller");

const productRoute = Router()

productRoute.get("/products", getAllProducts);

productRoute.get("/products/:id", getProductById);

productRoute.post("/products", createProduct);

productRoute.delete("/products/:id", deleteById)

module.exports = productRoute;
