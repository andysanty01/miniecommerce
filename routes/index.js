const {Router} = require("express");
const { getRoles, getRolesByType, postCreateRoles,putUpdateRoles, deleteRoles } = require("../controllers/role.controller");
const { getUsers, getUsersByRole, postCreateUsers, putUpdateUsers, deleteUsers } = require("../controllers/user.controller");
const {getSections, getSectionsByName, postCreateSections, putUpdateSections, deleteSections} = require("../controllers/section.controller");
const {getProducts,getProductsByTitle,postCreateProducts,putUpdateProducts,deleteProducts}= require("../controllers/product.controller");
const {getSectionsDel, getSectionsDelBySection, postCreateSectionsDel, putUpdateSectionsDel, deleteSectionsDel} = require("../controllers/section_del.controller")
const {getCart_cabs, getCart_cabsById, postCreateCart_cabs, putUpdateCart_cabs, deleteCart_cabs}=require("../controllers/cart_cab.controller")
const { getCart_dets, getCart_detsByDetalle, postCreateCart_dets, putUpdateCart_dets, deleteCart_dets}=require("../controllers/cart_det.controller")



const router= Router()

//Rutas de roles
router.get("/roles",getRoles)
router.get("/roles/:type",getRolesByType)
router.post("/roles",postCreateRoles)
router.put("/roles",putUpdateRoles)
router.put("/rolesd",deleteRoles)

//Rutas de usuarios
router.get("/users",getUsers)
router.get("/users/:role",getUsersByRole)
router.post("/users",postCreateUsers)
router.put("/users",putUpdateUsers)
router.put("/usersd",deleteUsers)

//Rutas de sections
router.get("/sections",getSections)
router.get("/sections/:name",getSectionsByName)
router.post("/sections",postCreateSections)
router.put("/sections",putUpdateSections)
router.put("/sectionsd",deleteSections)

//Rutas de products
router.get("/products",getProducts)
router.get("/products/:title",getProductsByTitle)
router.post("/products",postCreateProducts)
router.put("/products",putUpdateProducts)
router.put("/productsd",deleteProducts)

//Rutas de sectionsDel
router.get("/sections_del",getSectionsDel)
router.get("/sections_del/:section",getSectionsDelBySection)
router.post("/sections_del",postCreateSectionsDel)
router.put("/sections_del",putUpdateSectionsDel)
router.put("/sections_deld",deleteSectionsDel)

//Rutas de Cart Cabecera
router.get("/cartCab",getCart_cabs)
router.get("/cartCab/:id",getCart_cabsById)
router.post("/cartCab",postCreateCart_cabs)
router.put("/cartCab",putUpdateCart_cabs)
router.put("/cartCabd",deleteCart_cabs)

//Rutas de Cart Detalle
router.get("/cartDet",getCart_dets)
router.get("/cartDet/:id",getCart_detsByDetalle)
router.post("/cartDet",postCreateCart_dets)
router.put("/cartDet",putUpdateCart_dets)
router.delete("/cartDet",deleteCart_dets)


module.exports=router