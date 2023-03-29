const validations = require("./index")
const joi = require("joi")

const createComplteUser = {
	body: joi.object().keys({
		otherDetails: validations.otherDetailsValidations.createOtherDetails.body,
		educations: joi.array().items(validations.educationValidations.createEducation.body).required(),
		socialMedias: joi.array().items(validations.socialMediasValidations.createSocialMedias.body).required(),
		projects: joi.array().items(validations.projectValidations.createProject.body).required(),
		skills: joi.array().items(validations.skillsValidations.createSkills.body).required()
	})
}

module.exports = {
	createComplteUser
}