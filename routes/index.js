const {Router} = require("express");
const { getRoles, getRolesByType, postCreateRoles,putUpdateRoles, deleteRoles } = require("../controllers/role.controller");
const { getUsers, getUsersByRole, postCreateUsers, putUpdateUsers, deleteUsers } = require("../controllers/user.controller");
const {getSections, getSectionsByName, postCreateSections, putUpdateSections, deleteSections} = require("../controllers/section.controller");
const {getProducts,getProductsByTitle,postCreateProducts,putUpdateProducts,deleteProducts}= require("../controllers/product.controller");
const {getSectionsDel, getSectionsDelBySection, postCreateSectionsDel, putUpdateSectionsDel, deleteSectionsDel} = require("../controllers/section_del.controller")

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
router.put("/sections",deleteSections)

//Rutas de products
router.get("/products",getProducts)
router.get("/products/:title",getProductsByTitle)
router.post("/products",postCreateProducts)
router.put("/products",putUpdateProducts)
router.put("/products",deleteProducts)

//Rutas de sectionsDel
router.get("/sections_del",getSectionsDel)
router.get("/sections_del/:section",getSectionsDelBySection)
router.post("/sections_del",postCreateSectionsDel)
router.put("/sections_del",putUpdateSectionsDel)
router.put("/sections_del",deleteSectionsDel)


module.exports=router