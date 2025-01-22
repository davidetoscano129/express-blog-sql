const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");
const check = require("../middleware/check");

router.get("/", controllers.index); // INDEX
router.get("/:id", check, controllers.show); // SHOW

// router.post("/", controllers.createPost); // CREATE
// router.put("/:id", controllers.updatePost); // UPDATE
// router.patch("/:id",check, controllersa.modify); // MODIFY

router.delete("/:id", check, controllers.destroy); // DESTROY

module.exports = router;