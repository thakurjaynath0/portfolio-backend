const joi = require("joi")

const createUser = {
	body: joi.object().keys({
		username: joi.string().required(),
		name: joi.string().required(),
		picture: joi.string()
	})
}

const updateUser = {
	body: joi.object().keys({
		username: joi.string(),
		name: joi.string(),
		picture: joi.string()
	})
}

module.exports = {
	createUser,
	updateUser
}