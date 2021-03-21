const router = require("express").Router()
const controller = require("../controllers/product")

router.get("/", controller.getAll)
router.post("/", controller.create)
router.get("/:productId", controller.get)
router.put("/:productId", controller.update)
router.delete("/:productId", controller.delete)

module.exports = router