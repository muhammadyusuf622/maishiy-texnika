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



exports.deleteById = async function (req, res) {
  try {
    const id = req.params.id;

    const result = await quary(
      `
      DELETE FROM product WHERE id = $1 RETURNING *;
      `,
      [id]
    );

    if (!result.length) {
      return res.status(404).send({ message: "Product not found" });
    }

    res.status(200).send({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error.message);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

