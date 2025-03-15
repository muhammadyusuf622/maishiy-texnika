const { Router } = require("express");
const { getAllCategory, getByIdCategory, deleteById } = require("../controllers/category.controller");

const categoryRoute = Router()

categoryRoute.get("/Category", getAllCategory);

categoryRoute.get("/Category/:id", getByIdCategory);

categoryRoute.delete("/Category/:id", deleteById);

module.exports = categoryRoute;