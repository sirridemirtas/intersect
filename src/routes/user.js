const router = require("express").Router()
const controller = require("../controllers/user")

router.get("/users", controller.getAll)
router.post("/register", controller.register)
router.delete("/users/:userId", controller.delete)

module.exports = router