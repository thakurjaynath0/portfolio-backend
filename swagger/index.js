const swaggerDocument = require("./docs/")
const { SwaggerTheme } = require("swagger-themes")

const swaggerThemes = new SwaggerTheme("v3")
const swaggerOptions = {
	explorer: true,
	customCss: swaggerThemes.getBuffer("material")
}

module.exports = {
	swaggerDocument, 
	swaggerOptions
}