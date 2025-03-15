const { Router } = require("express");
const { getAllCategory, getByIdCategory, deleteById, updateCategory, addUser } = require("../controllers/category.controller");

const categoryRoute = Router()

categoryRoute.get("/Category", getAllCategory);

categoryRoute.get("/Category/:id", getByIdCategory);

categoryRoute.put("/Category/:id", updateCategory);

categoryRoute.post("/Category", addUser);

categoryRoute.delete("/Category/:id", deleteById);



module.exports = categoryRoute;