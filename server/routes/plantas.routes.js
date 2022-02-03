const router = require("express").Router();
const controller = require("../controllers/plantas.controller");

/*router.post("/new", controller.crearMascotas);*/
router.get("/:id", controller.obtenerUnaPlanta);
router.get("/", controller.obtenerPlantas);
router.put("/update/:id", controller.updateMascota);
router.delete("/delete/:id", controller.eliminarMascota);

module.exports = router;
