const joi = require("joi")
const {phone} = require("./custom.validations")

const sendMessage= {
	body: joi.object().keys({
		name: joi.string().required(),
		email: joi.string().required(),
		phone: joi.custom(phone),
		message: joi.string().required()
	})
}

module.exports = {
	sendMessage
}