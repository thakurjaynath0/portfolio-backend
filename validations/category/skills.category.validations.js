const joi = require("joi")
const {objectId} = require("../custom.validations")

const createSkillsCategory = {
	body: joi.object().keys({
		category: joi.string().required(),
		user: joi.custom(objectId).required()
	})
}

const updateSkillsCategory = {
	body: joi.object().keys({
		category: joi.string(),
		user: joi.custom(objectId)
	})
}

module.exports = {
	createSkillsCategory,
	updateSkillsCategory
}