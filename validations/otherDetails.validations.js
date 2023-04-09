const joi = require("joi")
const {objectId, phone, email} = require("./custom.validations")

const createOtherDetails = {
	body: joi.object().keys({
		tagline: joi.string().required(),
		email: joi.custom(email).required(),
		description: joi.string().required(),
		age: joi.number().required(),
		contact: joi.custom(phone).required(),
		from: joi.string().required(),
		user: joi.custom(objectId).required()
	})
}

const updateOtherDetails = {
	body: joi.object().keys({
		tagline: joi.string(),
		email: joi.custom(email),
		description: joi.string(),
		age: joi.number(),
		contact: joi.custom(phone),
		from: joi.string(),
		user: joi.custom(objectId)
	})
}

module.exports = {
	createOtherDetails,
	updateOtherDetails
}