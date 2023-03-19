const joi = require("joi")
const {objectId} = require("./custom.validations")

const createProject = {
	body: joi.object().keys({
		category: joi.custom(objectId).required(),
		title: joi.string().required(),
		description: joi.string().required(),
		type: joi.string().valid("group", "single").required(),
		photos: joi.array().items(joi.string()).required(),
		languages: joi.array().items(joi.string()).required(),
		time: joi.string().required(),
		members: joi.number(),
		user: joi.custom(objectId).required()
	})
}

const updateProject = {
	body: joi.object().keys({
		category: joi.custom(objectId),
		title: joi.string(),
		description: joi.string(),
		type: joi.string().valid("group", "single"),
		photos: joi.array().items(joi.string()),
		languages: joi.array().items(joi.string()),
		time: joi.string(),
		members: joi.number(),
		user: joi.custom(objectId)
	})
}

module.exports = {
	createProject,
	updateProject
}