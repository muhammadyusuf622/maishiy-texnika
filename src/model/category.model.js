const queryForCategory = require("../database/pg.category")

class DbCategory{
  constructor(){

  }

  static async getAllcategoryFn(){

    try {
      const category = await queryForCategory("SELECT * FROM category_products;")
      const newCategory = category.map(user => {
        user.products = JSON.parse(user.products)
        return user
      });
      return newCategory;
    } catch (error) {
      console.error("getAll class-da xatolik", error.message)
    }
  }


  static async getByIdCategory(id){

    try {
      const check = await queryForCategory(`SELECT EXISTS(SELECT 1 FROM category WHERE id = $1);`, [ id ] );
      if(!check[0].exists){
        return false
      }
      const category = await queryForCategory(`SELECT get_category_ById($1)`, [id]);
      return category[0].get_category_byid
    } catch (error) {
      console.error("getByIdCategory class ",error.message)
    }
  }

  static async deleteById(id){
    try {
      const check = await queryForCategory(`SELECT EXISTS(SELECT 1 FROM category WHERE id = $1);`, [ id ] );
      if(!check[0].exists){
        return false
      }
      const category = await queryForCategory(`DELETE FROM category WHERE id = $1 RETURNING *;`, [ id ]);
      return category;
    } catch (error) {
      console.error("deleteById-da", error.message);
    }
  }
}

module.exports = { DbCategory };