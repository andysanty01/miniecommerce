const { db } = require("../cnn");

//Metodo para listar sectionsDel
const getSectionsDel = async (req, res) => {
  const response = await db.any("select * from cs_section_del where sec_del_state=true;");
  res.json(response);
};

//Metodo para listar los sectionsDel por section
const getSectionsDelBySection = async (req, res) => {
  const section = req.params.section;
  const response = await db.any(
    `select * from cs_section_del where sec_del_state=true and sec_del_id=$1`,[section]);
  res.json(response);
};

//Metodo de creacion de sectionsDel

const postCreateSectionsDel = async (req, res) => {
  const {sec_id, product_id} = req.body
  const response = await db.any('INSERT INTO cs_section_del(sec_id, product_id, sec_del_state)VALUES ($1,$2,true)',[sec_id, product_id])
  res.json({
      message:'Seccion detalle Creado correctamente',body:{sec_id, product_id, sec_del_state}
  })
}

// Actualizacion de Rol
const putUpdateSectionsDel = async (req, res) => {
  const {sec_del_id, sec_id, product_id} = req.body
  const response = await db.any('UPDATE cs_section_del set sec_id=$2, product_id=$3 where sec_del_id=$1',[sec_del_id, sec_id, product_id])
  res.json({
      message:'Seccion detalle Actualizado correctamente',body:{sec_del_id, sec_id, product_id}
  })
}

// Desactivacion de sectionsDel
const deleteSectionsDel = async (req, res) => {
  const { sec_del_id } = req.body;
  const response = await db.query(`update cs_section_del set sec_del_state=false where sec_del_id=$1`, [sec_del_id,]);
  res.json({
    message: "SectionDel desactivado con exito",
    body: { Section: { sec_del_id } },
  });
};

module.exports = {
  getSectionsDel,
  getSectionsDelBySection,
  postCreateSectionsDel,
  putUpdateSectionsDel,
  deleteSectionsDel
};
