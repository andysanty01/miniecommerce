const { db } = require("../cnn");

//Metodo para listar cart_cabs
const getCart_dets = async (req, res) => {
  const response = await db.any("select * from cs_cart_det;");
  res.json(response);
};

//Metodo para listar los cart_dets por cart_cab
const getDetallesByCarrito = async (req, res) => {
  const id = req.params.id;
  const response = await db.any(
    `select * from cs_cart_det where cart_cab_id=$1`,[id]);
  res.json(response);
};

//Metodo de creacion de cart_cabs
const postCreateCart_dets = async (req, res) => {
  const {cart_cab_id, product_id, cart_det_amount, cart_det_price, cart_det_subtotal} = req.body
  const response = await db.any('INSERT INTO cs_cart_det(cart_cab_id, product_id, cart_det_amount, cart_det_price, cart_det_subtotal)VALUES ($1,$2,$3,$4,$5)',[cart_cab_id, product_id, cart_det_amount, cart_det_price, cart_det_subtotal])
  res.json({
      message:'Carrito correctamente',body:{cart_cab_id, product_id, cart_det_amount, cart_det_price, cart_det_subtotal}
  })
}

// Actualizacion de Rol
const putUpdateCart_dets = async (req, res) => {
  const {cart_cab_id, cart_det_id, product_id, cart_det_amount, cart_det_price, cart_det_subtotal} = req.body
  const response = await db.any('UPDATE cs_cart_det set cart_cab_id=$1, product_id=$3, cart_det_amount=$4, cart_det_price=$5, cart_det_subtotal=$6 where cart_det_id=$2',[cart_cab_id, cart_det_id, product_id, cart_det_amount, cart_det_price, cart_det_subtotal])
  res.json({
      message:'Carrito detalle Actualizado correctamente',body:{cart_cab_id, cart_det_id, product_id, cart_det_amount, cart_det_price, cart_det_subtotal}
  })
}
// Desactivacion de cart_cabs
const deleteCart_dets = async (req, res) => {
  const { cart_det_id } = req.body;
  const response = await db.query(`delete from public.cs_cart_det where cart_det_id=$1`, [cart_det_id]);
  res.json({
    message: "Cart Detalle eliminado con exito",
    body: { Rol: { cart_det_id } },
  });
};

module.exports = {
  getCart_dets,
  getDetallesByCarrito,
  postCreateCart_dets,
  putUpdateCart_dets,
  deleteCart_dets
};



