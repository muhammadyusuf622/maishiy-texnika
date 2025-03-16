const { Router } = require("express");
const { getAllProducts, createProduct, deleteById, getProductById, updateProduct } = require("../controllers/product.controller");

const productRoute = Router()

productRoute.get("/", getAllProducts);

productRoute.get("/:id", getProductById);

productRoute.post("/", createProduct);

productRoute.put("/:id", updateProduct);

productRoute.delete("/:id", deleteById);

module.exports = productRoute;
