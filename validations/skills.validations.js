const joi = require("joi")
const {objectId} = require("./custom.validations")

const createSkills = {
	body: joi.object().keys({
		category: joi.custom(objectId).required(),
		name: joi.string().required(),
		level: joi.number().required(),
		user: joi.custom(objectId).required()
	})
}

const updateSkills = {
	body: joi.object().keys({
		category: joi.custom(objectId),
		name: joi.string(),
		level: joi.number(),
		user: joi.custom(objectId)
	})
}

module.exports = {
	createSkills,
	updateSkills
}