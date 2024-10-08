const empresa = require("../controller/empresa.controller");

const router = require("express").Router();

router.get("/findAll", empresa.findAllEmpresas);
router.get("/find/:id", empresa.find)
router.post("/createEmpresa", empresa.createEmpresa);

module.exports = router;