const joi = require("joi")
const {objectId} = require("../custom.validations")

const createProjectCategory = {
	body: joi.object().keys({
		category: joi.string().required(),
		user: joi.custom(objectId).required()
	})
}

const updateProjectCategory = {
	body: joi.object().keys({
		category: joi.string(),
		user: joi.custom(objectId)
	})
}

module.exports = {
	createProjectCategory,
	updateProjectCategory
}