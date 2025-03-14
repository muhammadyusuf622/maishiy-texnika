const productmodel = `
   CREATE TABLE IF NOT EXISTS product (
   id SERIAL PRIMARY KEY,
   name VARCHAR(255) NOT NULL,
   price NUMERIC(10,2) NOT NULL,
   count SMALLINT NOT NULL DEFAULT 1
   );
`;
module.exports = productmodel;