const ProductFn = require("../model/product.model");
const ErrorHandler = require("../utils/ErrorHandler");


exports.getAllProducts = async function (req,res, next){
  try {
    
    const data = await ProductFn.getAllProduct()
    res.status(200).send({
      status:"success",
      message:"Product received successfully",
      data:data
    });
  } catch (error) {
    next(error);
  }
}

exports.getProductById = async function (req,res, next){
  try {
    const id = Number(req.params.id);
    if (isNaN(id) || id < 0) {
      throw new ErrorHandler(400, `ID ${req.params.id} wrong format!`);
    };

    const data = await ProductFn.getByIdProduct(id)
    if(!data){
      throw new ErrorHandler(404, `ID ${id} Not Found`)
    }
    res.status(200).send({
      status:"success",
      message:"Malumot muvaffaqiyatli Olindi",
      data: data
    });
  } catch (error) {
    next(error);
  }
}

exports.createProduct = async function (req, res, next) {
  try {
    const { name, price, count, category_id, description } = req.body;
    if (!name || !price || !count || !category_id || !description){
      throw new ErrorHandler(400, `name, price, count, category_id, description to'liq kiritilsin`);
    }

    const data = await ProductFn.addProduct({name,price,count,category_id,description});

    if(!data){
      throw new ErrorHandler(404, `Bunday category_id ${category_id} user topilmadi`)
    }
    res.status(200).send({
      status:"success",
      message:"Malumot muvaffaqiyatli Qo'shildi",
      data: data
    });
  } catch (error) {
    next(error);
  }
};


exports.deleteById = async function (req, res, next) {
  try {
    const id = req.params.id;
    if (isNaN(id)) {
      throw new ErrorHandler(400, `ID ${id} wrong format!`)
    };

    const data = await ProductFn.delProductById(id);

    if(!data){
      throw new ErrorHandler(404, `ID ${id} Not Found`)
    };

    res.status(200).send({
      status:"success",
      message:"The information was successfully deleted",
      data:data
    });
  } catch (error) {
    next(error);
  }
};


exports.updateProduct = async function (req,res, next){
  try {
    const id = req.params.id;
    if (isNaN(id)) {
      throw new ErrorHandler(400, `ID ${id} wrong format!`)
    };
    const { name, price, count, description } = req.body;
    if (!name || !price || !count || !description){
      throw new ErrorHandler(404, "name, price, count, category_id, description to'liq kiritilsin")
    };

    const data = await ProductFn.updateProduct({id, name, price, count, description});
    
    if(!data){
      throw new ErrorHandler(404, `ID ${id} Not Found`)
    };
    res.status(200).send({
      status:"success",
      message:"The information was successfully updated",
      data:data
    });
  
  } catch (error) {
    next(error);
  }
}

