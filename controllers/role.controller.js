const { db } = require("../cnn");

const getRoles = async (req, res) => {
  const response = await db.any("select * from cs_role where rol_state=true;");
  res.json(response);
};


//Metodo para listar los roles por tipo
const getRolesByID = async (req, res) => {
  const id = req.params.id;
  const response = await db.any(
    `select * from cs_role where rol_state=true and rol_id=$1`,[id]);
  res.json(response);
};

//Metodo de creacion de roles
const postCreateRoles = async (req, res) => {
  const {rol_email,rol_password, rol_type,rol_date,rol_state} = req.body
  const response = await db.any('INSERT INTO cs_role(rol_email,rol_password, rol_type,rol_date,rol_state)VALUES ($1,$2,$3,$4,true)',[rol_email,rol_password, rol_type,rol_date,rol_state])
  res.json({
      message:'Rol Creado correctamente',body:{rol_email,rol_password, rol_type,rol_date,rol_state}
  })
}

// Actualizacion de Rol
const putUpdateRoles = async (req, res) => {
  const {rol_id,rol_email,rol_password, rol_type,rol_date,rol_state} = req.body
  const response = await db.any('UPDATE cs_role set rol_email=$2,rol_password=$3, rol_type=$4,rol_date=$5,rol_state=$6 where rol_id=$1',[rol_id,rol_email,rol_password, rol_type,rol_date,rol_state])
  res.json({
      message:'Rol Actualizado correctamente',body:{rol_id,rol_email,rol_password,rol_type,rol_date,rol_state}
  })
}

// Desactivacion de roles
const deleteRoles = async (req, res) => {
  const { rol_id } = req.body;
  const response = await db.query(`update cs_role set rol_state=false where rol_id=$1`, [rol_id]);
  res.json({
    message: "Rol desactivado con exito",
    body: { Rol: { rol_id } },
  });
};

module.exports = {
  getRoles,
  getRolesByID,
  postCreateRoles,
  putUpdateRoles,
  deleteRoles
};
