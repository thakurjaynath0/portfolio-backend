const { email, phone } = require("./custom.validations")
const validations = require("./index")
const joi = require("joi")

const createOtherDetails = {
	body: joi.object().keys({
		tagline: joi.string().required(),
		email: joi.custom(email).required(),
		description: joi.string().required(),
		age: joi.number().required(),
		contact: joi.custom(phone).required(),
		from: joi.string().required(),
	}).required()
}

const createEducation = {
	body: joi.object().keys({
		course: joi.string().required(),
		institution: joi.string().required(),
		location: joi.string().required(),
		from: joi.string().required(),
		to: joi.string().required()
	}).required()
}

const createSocialMedias = {
	body: joi.object().keys({
		media: joi.string().required(),
		link: joi.string().required()
	}).required()
}

const createProjectCategory = {
	body: joi.object().keys({
		category: joi.string().required(),
		projects: joi.array().items(joi.object().keys({
			title: joi.string().required(),
			description: joi.string().required(),
			type: joi.string().valid("group", "single").required(),
			photos: joi.array().items(joi.string()).required(),
			languages: joi.array().items(joi.string()).required(),
			time: joi.string().required(),
			members: joi.number()
		}))
	}).required()
}

const createSkillsCategory = {
	body: joi.object().keys({
		category: joi.string().required(),
		skills: joi.array().items(joi.object().keys({
			name: joi.string().required(),
			level: joi.number().required()
		}))
	}).required()
}

const createComplteUser = {
	body: joi.object().keys({
		user: validations.userValidations.createUser.body,
		otherDetails: createOtherDetails.body,
		educations: joi.array().items(createEducation.body).required(),
		socialMedias: joi.array().items(createSocialMedias.body).required(),
		projectCategory: joi.array().items(createProjectCategory.body).required(),
		skillsCategory: joi.array().items(createSkillsCategory.body).required()
	})
}

module.exports = {
	createComplteUser
}