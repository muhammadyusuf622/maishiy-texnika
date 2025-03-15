const quary = require("../database/pg");
const ProductFn = require("../model/product.model");

exports.getAllProducts = async function (req,res){
  try {
    
    const data = await ProductFn.getAllProduct()
    res.status(200).send({
      status:"success",
      message:"Product received successfully",
      data:data
    });
  } catch (error) {
    console.error(error.message)
  }
}

exports.getProductById = async function (req,res){
  try {
    const id = req.params.id;
    if (isNaN(id)) {
      return res.status(400).send({
        status: "error",
        message: `ID ${id} noto'g'ri formatda!`
      });
    };

    const data = await ProductFn.getByIdProduct(id)
    if(!data){
      return res.status(404).send({
        status:"error",
        message:`Id ${id} Not Found`
      });
    }
    res.status(200).send({
      status:"success",
      message:"Malumot muvaffaqiyatli Olindi",
      data: data
    });
  } catch (error) {
    console.error(message.error)
  }
}

exports.createProduct = async function (req, res) {
  try {
    const { name, price, count, category_id, description } = req.body;
    if (!name || !price || !count || !category_id || !description){
      res.status(404).send({
        status: "error",
        message:"name, price, count, category_id, description to'liq kiritilsin"
      });
    }

    const data = await ProductFn.addProduct({name,price,count,category_id,description});

    if(!data){
      return res.status(400).send({
        status:"error",
        message:`Bunday category_id ${category_id} user topilmadi`
      });
    }
    res.status(200).send({
      status:"success",
      message:"Malumot muvaffaqiyatli Qo'shildi",
      data: data
    });
  } catch (error) {
    console.error("Error creating product:", error.message);
    res.status(500).send({ error: "Internal Server Error" }); // Foydalanuvchiga javob qaytarish
  }
};





exports.deleteById = async function (req, res) {
  try {
    const id = req.params.id;

    const result = await quary(`DELETE FROM product WHERE id = $1 RETURNING *;`,[id]);

    if (!result.length) {
      return res.status(404).send({ message: "Product not found" });
    }

    res.status(200).send({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error.message);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

