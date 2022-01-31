const { db } = require("../cnn");

const getRoles = async (req, res) => {
  const response = await db.any("select * from cs_role where rol_state=true;");
  res.json(response);
};


//Metodo para listar los roles por tipo
const getRolesByType = async (req, res) => {
  const type = req.params.type;
  const response = await db.any(
    `select * from cs_role where rol_state=true and rol_type=$1`,[type]);
  res.json(response);
};

//Metodo de creacion de roles
const postCreateRoles = async (req, res) => {
  const { rol_email, rol_password, rol_type, rol_date} = req.body;
  console.log(req.body);
  const response = await db.query(
    `insert into cs_role(rol_email,rol_password,rol_type,rol_date,rol_state) values($1,$2,$3,$4,true)`,
    [rol_email, rol_password, rol_type, rol_date]
  );
  res.json({
    message: "Rol creado con exito",
    body: {
      Rol: {
        rol_email,
        rol_password,
        rol_type,
        rol_date,
      },
    },
  });
};

// Actualizacion de Rol
const putUpdateRoles = async (req, res) => {
  const { rol_id,rol_email, rol_password, rol_type, rol_date } = req.body;
  const response = await db.query(
    `update cs_role set rol_email=$2,rol_password=$3,rol_type=$4, rol_date=$5 where rol_id=$1`,
    [rol_id, rol_email, rol_password, rol_type, rol_date]
  );
  res.json({
    message: "Rol actualizado con éxito",
    body: {
      Rol:{
      rol_id,
      rol_email, 
      rol_password, 
      rol_type, 
      rol_date
      },
    },
  });
};

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
  getRolesByType,
  postCreateRoles,
  putUpdateRoles,
  deleteRoles
};
