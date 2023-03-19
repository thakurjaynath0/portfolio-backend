const Education = require("../models/education.model")
const User = require("../models/user.model")
const customError = require("../errors")


const createEducation = async ({obj}) => {
	const isUserValid = await User.findOne({_id: obj.user})

	if(!isUserValid){
		throw new customError.NotFound(`User with id: ${obj.user} not found`)
	}

	const education = await Education.create({...obj})
	return education
}

const getAllEducation = async () => {
	const educations = await Education.find({})
	return educations
}

const getSingleEducation = async (eduId) => {
	const education = await Education.findOne({_id: eduId})

	if(!education){
		throw new customError.NotFound(`Education with id: ${eduId} not found`)
	}

	return education
}

const updateEducation = async ({eduId, obj}) => {
	let education = await Education.findOne({_id: eduId})

	if(!education){
		throw new customError.NotFound(`Education with id: ${eduId} not found`)
	}

	if(obj?.user){
		const isUserValid = await User.findOne({_id: obj.user})

		if(!isUserValid){
			throw new customError.NotFound(`User with id: ${obj.user} not found`)
		}
	}

	Object.assign(education, obj)
	await education.save()

	return education
}

const deleteEducation = async (eduId) => {
	let education = await Education.findOne({_id: eduId})

	if(!education){
		throw new customError.NotFound(`Education with id: ${eduId} not found`)
	}

	education = await Education.findOneAndRemove({_id: eduId})
	return education
}

module.exports = {
	createEducation,
	getAllEducation,
	getSingleEducation,
	updateEducation,
	deleteEducation
}
