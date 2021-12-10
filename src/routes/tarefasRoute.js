const express = require("express");
const router = express.Router();
const controller = require("../controller/tarefasController");

router.get("/", controller.getAll);

router.get("/tarefas", controller.getAll);
router.post("/", controller.postTarefa);
router.get("/:id", controller.getById);
router.delete("/:id", controller.deleteTarefa);

module.exports = router;
