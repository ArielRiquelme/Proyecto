const router = require("express").Router();

router.use("/plantas", require("./plantas.routes"));

module.exports = router;
