const { DbCategory } = require("../model/category.model");


exports.getAllCategory = async function (req,res){
  try {
     
    const data = await DbCategory.getAllcategoryFn()

    res.status(200).send({
      status:"success",
      message:"Malumot muvaffaqiyatli olindi",
      data: data
    });
  } catch (error) {
    console.error("getAllcategory-da xatolik",error.message);
    res.status(500).send()
  }
}

exports.getByIdCategory = async function (req,res){
  const id = req.params.id;

  if(!Number(id)){
    return res.status(400).send({
     status:"error",
     message:"ID Xato kiritilgan"
    });
  }
  
  try {
    const data = await DbCategory.getByIdCategory(id)

    if(!data){
      return res.status(404).send({
        status:"error",
        message:`Bunday ID ${id} mavjud emas`
      });
    }
    
    res.status(200).send({
      status:"success",
      message:"Malumot muvaffaqiyatli olindi",
      data: data
    });
  } catch (error) {
    console.error(message.error)
  }
}

exports.deleteById = async function (req,res){
  const id = req.params.id;

  if(!Number(id)){
    return res.status(400).send({
     status:"error",
     message:"ID Xato kiritilgan"
    });
  }
  try {
    const data = await DbCategory.deleteById(id);

    if(!data){
      return res.status(404).send({
        status:"error",
        message:`Bunday ID ${id} mavjud emas`
      });
    }
    res.status(200).send({
      status:"success",
      message:"Malumot muvaffaqiyatli Uchirildi",
      data: data
    });
  } catch (error) {
    console.error(message.error)
  }
}

exports.updateCategory = async function (req,res){
  const id = req.params.id;
  const { name } = req.body;
  if(!(Number(id) && name)){
    return res.status(400).send({
     status:"error",
     message:"ID or Name Error"
    });
  };

  try {
    const data = await DbCategory.updateCategory(id, name);
    if(!data){
      return res.status(404).send({
        status:"error",
        message:`Bunday ID ${id} mavjud emas`
      });
    }
    res.status(200).send({
      status:"success",
      message:"Malumot muvaffaqiyatli Yangilandi",
      data: data
    });
    
  } catch (error) {
    console.error(error.message)
  }
}

exports.addUser = async function (req,res){

  const {name} = req.body;
  if(!name){
    return res.status(404).send({
      status:"error",
      message:`name kiritilmagan`
    });
  }
  try {
    const data = await DbCategory.addUser(name)

    if(!data){
      return res.status(404).send({
        status:"error",
        message:`Bunday Name allaqachon mavjud`
      });
    }

    res.status(200).send({
      status:"success",
      message:"Malumot muvaffaqiyatli Qo'shildi",
      data: data
    });
  } catch (error) {
    console.error(error.message);
  }
}
