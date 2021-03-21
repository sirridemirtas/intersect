const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const CRUD = require("./src/libraries/crud")

/**
 * App
 */
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/**
 * Environment variables
 */
require("dotenv").config()

/**
 * Front End
 */
// https://stackoverflow.com/questions/39123607/how-to-use-path-to-regexp-to-match-all-paths-thats-not-starting-with-apia
app.use(express.static("public"))

/**
 * Authentication
 */
//app.use("/api", require("./src/controllers/auth_controller").authenticate)

/**
 * MongoDB connection
 */
app.use("/api", require("./src/utils/db_connect"))

/**
 * Routes
 */
app.use("/api/auth", require("./src/routes/auth"))

app.use("/api/auth", require("./src/routes/user"))

app.use("/api", require("./src/routes"))

//app.use("/api/customers", require("./src/routes/customers"))
/* app.use("/api/customers", new CRUD(
	require("./src/models/customer_model")
)) */

app.use("/api/customers/:customerId/accounts", new CRUD(
	require("./src/models/customer_account_model")
))

//app.use("/api/products", require("./src/routes/products"))
app.use("/api/products", new CRUD(
	require("./src/models/product_model")
))


/* app.use("/api", [
	require("./src/routes/auth"),
	require("./src/routes/customers"),
	require("./src/routes/products")
]) */

/**
 * Server
 */
const port = parseInt(process.env.PORT, 10) || 3000

app.listen(port, () => {
	console.log(`Intersect app listening at http://localhost:${port}`)
})