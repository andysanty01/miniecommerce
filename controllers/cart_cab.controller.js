const { db } = require("../cnn");

//Metodo para listar cart_cabs
const getCart_cabs = async (req, res) => {
  const response = await db.any("select * from cs_cart_cab where cart_cab_state=true;");
  res.json(response);
};

//Metodo para listar los cart_cabs por tipo
const getCart_cabsById = async (req, res) => {
  const id = req.params.id;
  const response = await db.any(
    `select * from cs_cart_cab where cart_cab_state=true and cart_cab_id=$1`,[id]);
  res.json(response);
};

//Metodo de creacion de cart_cabs

const postCreateCart_cabs = async (req, res) => {
  const {user_id, cart_cab_date, cart_cab_iva, cart_cab_discount, cart_cab_subtotal, cart_cab_total} = req.body
  const response = await db.any('INSERT INTO cs_cart_cab(user_id, cart_cab_date, cart_cab_iva, cart_cab_discount, cart_cab_subtotal, cart_cab_total, cart_cab_state)VALUES ($1,$2,$3,$4,$5,$6,true)',[user_id, cart_cab_date, cart_cab_iva, cart_cab_discount, cart_cab_subtotal, cart_cab_total, cart_cab_state])
  res.json({
      message:'Carrito cabecera Creado correctamente',body:{user_id, cart_cab_date, cart_cab_iva, cart_cab_discount, cart_cab_subtotal, cart_cab_total}
  })
}

// Actualizacion de Rol
const putUpdateCart_cabs = async (req, res) => {
  const {cart_cab_id,user_id, cart_cab_date, cart_cab_iva, cart_cab_discount, cart_cab_subtotal, cart_cab_total} = req.body
  const response = await db.any('UPDATE cs_cart_cab set user_id=$2, cart_cab_date=$3, cart_cab_iva=$4, cart_cab_discount=$5, cart_cab_subtotal=$6, cart_cab_total=$7, cart_cab_state=$8 where cart_cab_id=$1',[cart_cab_id,user_id, cart_cab_date, cart_cab_iva, cart_cab_discount, cart_cab_subtotal, cart_cab_total])
  res.json({
      message:'Carrito Actualizado correctamente',body:{cart_cab_id,user_id, cart_cab_date, cart_cab_iva, cart_cab_discount, cart_cab_subtotal, cart_cab_total}
  })
}


// Desactivacion de cart_cabs
const deleteCart_cabs = async (req, res) => {
  const { cart_cab_id } = req.body;
  const response = await db.query(`update cs_cart_cab set cart_cab_state=false where cart_cab_id=$1`, [cart_cab_id]);
  res.json({
    message: "Cart Cab desactivado con exito",
    body: { Rol: { cart_cab_id } },
  });
};

module.exports = {
  getCart_cabs,
  getCart_cabsById,
  postCreateCart_cabs,
  putUpdateCart_cabs,
  deleteCart_cabs
};



