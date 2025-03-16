const ErrorHandler = require("../utils/ErrorHandler");
const { DbCategory } = require("../model/category.model");



exports.getAllCategory = async function (req,res, next){
  try {
     
    const data = await DbCategory.getAllcategoryFn()

    res.status(200).send({
      status:"success",
      message:"Malumot muvaffaqiyatli olindi",
      data: data
    });
  } catch (error) {
    next(error)
  }
}

exports.getByIdCategory = async function (req,res, next){
  const id = Number(req.params.id);

  if(isNaN(id)){
    throw new ErrorHandler(400, `ID ${req.params.id} Wrong Format`)
  }
  
  try {
    const data = await DbCategory.getByIdCategory(id)

    if(!data){
      throw new ErrorHandler(404, `Bunday ID ${id} Not Found`)
    }
    
    res.status(200).send({
      status:"success",
      message:"Malumot muvaffaqiyatli olindi",
      data: data
    });
  } catch (error) {
    next(error)
  }
}

exports.deleteById = async function (req,res, next){
  const id = Number(req.params.id);

  if(isNaN(id)){
    throw new ErrorHandler(400, `ID ${req.params.id} Wrong Format`)
  }
  try {
    const data = await DbCategory.deleteById(id);

    if(!data){
      throw new ErrorHandler(404, `ID ${id} Not Found`)
    }
    res.status(200).send({
      status:"success",
      message:"Malumot muvaffaqiyatli Uchirildi",
      data: data
    });
  } catch (error) {
    next(error)
  }
}

exports.updateCategory = async function (req,res, next){
  try {
    const id = Number(req.params.id);
    const { name } = req.body;
    if(isNaN(id) && !name && id > 0){
      throw new ErrorHandler(400, `ID ${req.params.id} OR Name Error`);
    };
    const data = await DbCategory.updateCategory(id, name);
    if(!data){
      throw new ErrorHandler(404, `ID ${id} Not Found`)
    }
    res.status(200).send({
      status:"success",
      message:"Malumot muvaffaqiyatli Yangilandi",
      data: data
    });
    
  } catch (error) {
    next(error)
  }
}

exports.addUser = async function (req,res, next){
  try {
    const {name} = req.body;
    if(!name){
      throw new ErrorHandler(404, `Name is not entered`)
    }
    const data = await DbCategory.addUser(name)

    if(!data){
      throw new ErrorHandler(404, "Such Name already exists")
    }

    res.status(200).send({
      status:"success",
      message:"Malumot muvaffaqiyatli Qo'shildi",
      data: data
    });
  } catch (error) {
    next(error)
  }
}
