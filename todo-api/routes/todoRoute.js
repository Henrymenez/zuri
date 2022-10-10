const router = require("express").Router()
const todoController = require("./../controllers/todoController");

router.post("/", todoController.create)
router.get("/", todoController.getAll)
router.put("/:id", todoController.update)
router.delete("/:id", todoController.delete)


module.exports = router