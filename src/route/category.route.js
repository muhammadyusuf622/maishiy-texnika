const { Router } = require("express");
const { getAllCategory, getByIdCategory } = require("../controllers/category.controller");

const categoryRoute = Router()

categoryRoute.get("/Category", getAllCategory);

categoryRoute.get("/Category/:id", getByIdCategory);

module.exports = categoryRoute;