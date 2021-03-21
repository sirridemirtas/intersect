const router = require("express").Router()
const controller = require("../controllers/customer_controller")

router.get("/", controller.getAll)
router.post("/", controller.create)
router.get("/:customerId", controller.get)
router.put("/:customerId", controller.update)
router.delete("/:customerId", controller.delete)

module.exports = router