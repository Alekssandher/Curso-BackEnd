const empresa = require("../controller/empresa.controller");
const auth = require("../service/auth.service")

const router = require("express").Router();

router.get("/findAll", empresa.findAllEmpresas);
router.get("/find/:id", empresa.find)


router.post("/createEmpresa", empresa.createEmpresa);
router.post("/deleteEmpresa/:id", empresa.deleteEmpresa)


module.exports = router;