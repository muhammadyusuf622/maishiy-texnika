const query = require("../database/pg");

class ProductFn{
   constructor(){
   }

   static async getAllProduct(){

      try {
         const product = await query(`SELECT * FROM product;`);
         return product;
      } catch (error) {
         console.error(error.message);
      }
   }

   static async getByIdProduct(id){

      try {
         const check = await query(`SELECT EXISTS(SELECT 1 FROM product WHERE id = $1);`, [ id ]);
         if(!check[0].exists){
            return false
         }

         const product = await query(`SELECT * FROM product WHERE id = $1`, [id]);
         return product
      } catch (error) {
         console.error(error.message)
      }
   }

   static async addProduct({name, price, count, category_id, description}){
      try {
         const check = await query(`SELECT EXISTS(SELECT 1 FROM category WHERE id = $1);`,[ category_id ]);
         if(!check[0].exists){
            return false
         }
         const data = await query(`INSERT INTO product (name,price,count,category_id, description) VALUES ($1, $2 ,$3, $4, $5) RETURNING *;`,
            [name,price,count,category_id,description]
         );

         return data
      } catch (error) {
         console.error(error.message)
      }
   }
}

module.exports = ProductFn;