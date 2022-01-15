const { db } = require("../cnn");

//Metodo para listar usuarios
const getUsers = async (req, res) => {
  const response = await db.any("select * from cs_user where user_state=true;");
  res.json(response);
};

//Metodo para listar los users por tipo
const getUsersByRole = async (req, res) => {
  const role = req.params.role;
  const response = await db.any(
    `select * from cs_user where user_state=true and rol_id=$1`,[role]);
  res.json(response);
};

//Metodo de creacion de users
const postCreateUsers = async (req, res) => {
  const {rol_id, user_names, user_phone, user_addres} = req.body;
  console.log(req.body);
  const response = await db.query(
    `insert into cs_user(rol_id,user_names,user_phone,user_addres,user_state) values($1,$2,$3,$4,true)`,
    [rol_id, user_names, user_phone, user_addres]
  );
  res.json({
    message: "Usuario creado con exito",
    body: {
      Rol: {
        rol_id, 
        user_names, 
        user_phone, 
        user_addres
      },
    },
  });
};

// Actualizacion de Rol
const putUpdateUsers = async (req, res) => {
  const { user_id,rol_id,user_names, user_phone, user_addres} = req.body;
  const response = await db.query(
    `update cs_user set rol_id=$2,user_names=$3,user_phone=$4, user_addres=$5 where user_id=$1`,
    [user_id, rol_id,user_names, user_phone, user_addres]
  );
  res.json({
    message: "Usuario actualizado con éxito",
    body: {
      Rol:{
        user_id, 
        rol_id,
        user_names, 
        user_phone, 
        user_addres
      },
    },
  });
};

// Desactivacion de users
const deleteUsers = async (req, res) => {
  const { user_id } = req.query;
  const response = await db.query(`update cs_user set user_state=false where user_id=$1`, [user_id]);
  res.json({
    message: "Usuario desactivado con exito",
    body: { Rol: { user_id } },
  });
};

module.exports = {
  getUsers,
  getUsersByRole,
  postCreateUsers,
  putUpdateUsers,
  deleteUsers
};



