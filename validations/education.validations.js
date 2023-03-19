const joi = require("joi")
const {objectId} = require("./custom.validations")

const createEducation = {
	body: joi.object().keys({
		course: joi.string().required(),
		institution: joi.string().required(),
		location: joi.string().required(),
		from: joi.string().required(),
		to: joi.string().required(),
		user: joi.custom(objectId).required()
	})
}

const updateEducation = {
	body: joi.object().keys({
		course: joi.string(),
		institution: joi.string(),
		location: joi.string(),
		from: joi.string(),
		to: joi.string(),
		user: joi.custom(objectId)
	})
}

module.exports = {
	createEducation,
	updateEducation
}