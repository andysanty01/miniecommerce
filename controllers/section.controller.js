const { db } = require("../cnn");

//Metodo para listar sections
const getSections = async (req, res) => {
  const response = await db.any("select * from cs_section where sec_state=true;");
  res.json(response);
};

//Metodo para listar los sections por name
const getSectionsByName = async (req, res) => {
  const name = req.params.name;
  const response = await db.any(
    `select * from cs_section where sec_state=true and sec_name=$1`,[name]);
  res.json(response);
};

//Metodo de creacion de sections
const postCreateSections = async (req, res) => {
  const { sec_name} = req.body;
  console.log(req.body);
  const response = await db.query(
    `insert into cs_section(sec_name, sec_state) values($1,true)`,
    [sec_name]
  );
  res.json({
    message: "Section creado con exito",
    body: {
      Section: {
        sec_name
      },
    },
  });
};

// Actualizacion de Section
const putUpdateSections = async (req, res) => {
  const { sec_id,sec_name} = req.body;
  const response = await db.query(
    `update cs_section set sec_name=$2 where sec_id=$1`,
    [sec_id,sec_name]
  );
  res.json({
    message: "Section actualizado con éxito",
    body: {
      Section:{
        sec_id,
        sec_name
      },
    },
  });
};

// Desactivacion de sections
const deleteSections = async (req, res) => {
  const { sec_id } = req.body;
  const response = await db.query(`update cs_section set sec_state=false where sec_id=$1`, [sec_id]);
  res.json({
    message: "Section desactivado con exito",
    body: { Section: { sec_id } },
  });
};

module.exports = {
  getSections,
  getSectionsByName,
  postCreateSections,
  putUpdateSections,
  deleteSections
};
