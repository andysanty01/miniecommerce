const { db } = require("../cnn");

const getProducts = async (req, res) => {
  const response = await db.any("select * from cs_product where product_state=true;");
  res.json(response);
};

//Metodo para listar los products por title
const getProductsByTitle = async (req, res) => {
  const title = req.params.title;
  const response = await db.any(
    `select * from cs_product where product_state=true and product_title=$1`,[title]);
  res.json(response);
};

//Metodo de creacion de products
const postCreateProducts = async (req, res) => {
  const { product_title, product_description, product_cost, product_price, product_stock, product_type, product_image} = req.body;
  console.log(req.body);
  const response = await db.query(
    `insert into cs_product(product_title, product_description, product_cost, product_price, product_stock, product_type, product_image) values($1,$2,$3,$4,$5,$6,$7,true)`,
    [product_title, product_description, product_cost, product_price, product_stock, product_type, product_image]
  );
  res.json({
    message: "Product creado con exito",
    body: {
      Product: {
        product_title, 
        product_description, 
        product_cost,
        product_price, 
        product_stock, 
        product_type, 
        product_image, 
        producto_state
      },
    },
  });
};

// Actualizacion de Product
const putUpdateProducts = async (req, res) => {
  const { product_id, product_title, product_description, product_cost, product_price, product_stock, product_type, product_image } = req.body;
  const response = await db.query(
    `update cs_product set product_title=$2,product_description=$3,product_cost=$4, product_price=$5, product_stock=$6, product_type=$7, product_image=$8 where product_id=$1`,
    [product_id,product_title, product_description, product_cost, product_price, product_stock, product_type, product_image]
  );
  res.json({
    message: "Product actualizado con éxito",
    body: {
      Product:{
        product_id,
        product_title, 
        product_description, 
        product_cost, 
        product_price, 
        product_stock, 
        product_type, 
        product_image
      },
    },
  });
};

// Desactivacion de products
const deleteProducts = async (req, res) => {
  const { product_id } = req.query;
  const response = await db.query(`update cs_product set product_state=false where product_id=$1`, [product_id,]);
  res.json({
    message: "Product desactivado con exito",
    body: { Product: { product_id } },
  });
};

module.exports = {
  getProducts,
  getProductsByTitle,
  postCreateProducts,
  putUpdateProducts,
  deleteProducts
};
