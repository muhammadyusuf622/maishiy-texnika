const { Router } = require("express");
const { getAllCategory, getByIdCategory, deleteById, updateCategory, addUser } = require("../controllers/category.controller");

const categoryRoute = Router()

categoryRoute.get("/", getAllCategory);

categoryRoute.get("/:id", getByIdCategory);

categoryRoute.put("/:id", updateCategory);

categoryRoute.post("/", addUser);

categoryRoute.delete("/:id", deleteById);



module.exports = categoryRoute;