const quary = require("../database/pg")

exports.getAllProducts = async function (req,res){
  try {
    const products = await quary("SELECT * FROM product;");

    res.send(products);
  } catch (error) {
    
  }
}


exports.createProduct = async function (req, res) {
  try {
    const { name, price, count } = req.body;

    const product = await quary(
      `
      INSERT INTO product (name, price, count) VALUES ($1, $2, $3) RETURNING *
      `,
      [name, price, count]
    );

    res.status(201).send(product);
  } catch (error) {
    console.error("Error creating product:", error.message);
    res.status(500).send({ error: "Internal Server Error" }); // Foydalanuvchiga javob qaytarish
  }
};
