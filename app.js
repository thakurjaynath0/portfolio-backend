require("express-async-errors")
const path = require("path")
const express = require("express")
const morgan = require("./config/morgan")
const helmet = require("helmet")
const mongoSanitize = require("express-mongo-sanitize")
const xss = require("xss-clean")
const compression = require("compression")
const cors = require("cors")
const config = require("./config")
const cookieParser = require("cookie-parser")
const routes = require("./routes/v1")
const customError = require("./errors")
const { errorConverter, errorHandler } = require("./middlewares/errors")
const swaggerUI = require("swagger-ui-express")
const {swaggerDocument, swaggerOptions} = require("./swagger")

const app = express()

if (config.env !== "test") {
	app.use(morgan.successHandler)
	app.use(morgan.errorHandler)
}
app.use(helmet({
	crossOriginResourcePolicy: false,
})) // set security HTTP headers


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(xss())
app.use(mongoSanitize())

app.use(compression())

app.use(cors())
app.options("*", cors())

app.use(cookieParser(config.jwt.secret))

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument, swaggerOptions))

app.use("/api/v1", routes)

app.use("/uploads", express.static(__dirname+"/uploads"))

app.use("", express.static(path.join(__dirname+"/frontend")))

app.get("*", async (req, res) => {
	res.status(200).sendFile(path.join(__dirname + "/frontend/index.html"))
})

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
	next(new customError.NotFound())
})

// convert error to ApiError, if needed
app.use(errorConverter)

// handle error
app.use(errorHandler)

module.exports = app