const quary = require("../database/pg")

exports.getAllProducts = async function (req,res){
  try {
    const products = await quary("SELECT * FROM product;");

    res.send(products);
  } catch (error) {
    
  }
}