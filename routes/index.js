const {Router} = require("express");
const { getRoles, getRolesByType, postCreateRoles,putUpdateRoles, deleteRoles } = require("../controllers/role.controller");
const { getUsers, getUsersByRole, postCreateUsers, putUpdateUsers, deleteUsers } = require("../controllers/user.controller");
const {getSections, getSectionsByName, postCreateSections, putUpdateSections, deleteSections} = require("../controllers/section.controller")

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

module.exports=router