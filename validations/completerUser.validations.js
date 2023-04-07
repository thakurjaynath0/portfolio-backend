const validations = require("./index")
const joi = require("joi")
const { objectId } = require("./custom.validations")

const createProjectCategory = {
	body: joi.object().keys({
		category: joi.string().required(),
		user: joi.custom(objectId).required(),
		projects: joi.array().items(joi.object().keys({
			title: joi.string().required(),
			description: joi.string().required(),
			type: joi.string().valid("group", "single").required(),
			photos: joi.array().items(joi.string()).required(),
			languages: joi.array().items(joi.string()).required(),
			time: joi.string().required(),
			members: joi.number()
		}))
	})
}

const createSkillsCategory = {
	body: joi.object().keys({
		category: joi.string().required(),
		user: joi.custom(objectId).required(),
		skills: joi.array().items(joi.object().keys({
			name: joi.string().required(),
			level: joi.number().required()
		}))
	})
}
const createComplteUser = {
	body: joi.object().keys({
		otherDetails: validations.otherDetailsValidations.createOtherDetails.body,
		educations: joi.array().items(validations.educationValidations.createEducation.body).required(),
		socialMedias: joi.array().items(validations.socialMediasValidations.createSocialMedias.body).required(),
		projectCategory: joi.array().items(createProjectCategory.body),
		skillsCategory: joi.array().items(createSkillsCategory.body)
	})
}

module.exports = {
	createComplteUser
}