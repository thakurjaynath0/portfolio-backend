const SocialMedia = require("../models/socialMedias.model")
const User = require("../models/user.model")
const customError = require("../errors")

const createSocialMedia = async ({obj}) => {
	const isUserValid = await User.findOne({_id: obj.user})

	if(!isUserValid){
		throw new customError.NotFound(`User with id: ${obj.user} not found`)
	}

	const socialMedia = await SocialMedia.create({...obj})
	return socialMedia
}

const getAllSocialMedia = async () => {
	const socialMedia = await SocialMedia.find({})
	return socialMedia
}

const getSingleSocialMedia = async (smId) => {
	const socialMedia = await SocialMedia.findOne({_id: smId})

	if(!socialMedia){
		throw new customError.NotFound(`Social media with id: ${smId} not found`)
	}

	return socialMedia
}

const updateSocialMedia = async ({smId, obj}) => {
	let socialMedia = await SocialMedia.findOne({_id: smId})
	
	if(!socialMedia){
		throw new customError.NotFound(`Social media with id: ${smId} not found`)
	}

	if(obj?.user){
		const isUserValid = await User.findOne({_id: obj.user})
		if(!isUserValid){
			throw new customError.NotFound(`User with id: ${obj.user} not found`)
		}
	}

	Object.assign(socialMedia, obj)
	await socialMedia.save()

	return socialMedia
}

const deleteSocialMedia = async (smId) => {
	let socialMedia = await SocialMedia.findOne({_id: smId})
	
	if(!socialMedia){
		throw new customError.NotFound(`Social media with id: ${smId} not found`)
	}

	socialMedia = await SocialMedia.findOneAndRemove({_id: smId})
	return socialMedia
}

module.exports = {
	createSocialMedia,
	getAllSocialMedia,
	getSingleSocialMedia,
	updateSocialMedia,
	deleteSocialMedia
}