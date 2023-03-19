const joi = require("joi")
const {objectId} = require("./custom.validations")

const createSocialMedias = {
	body: joi.object().keys({
		media: joi.string().required(),
		link: joi.string().required(),
		user: joi.custom(objectId).required()
	})
}

const updateSocialMedias = {
	body: joi.object().keys({
		media: joi.string(),
		link: joi.string(),
		user: joi.custom(objectId)
	})
}

module.exports = {
	createSocialMedias,
	updateSocialMedias
}