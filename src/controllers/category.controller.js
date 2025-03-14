const queryForCategory = require("../database/pg.category");
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

    res.status(200).send({
      status:"success",
      message:"Malumot muvaffaqiyatli olindi",
      data: data
    });
  } catch (error) {
    console.error(message.error)
  }
}
