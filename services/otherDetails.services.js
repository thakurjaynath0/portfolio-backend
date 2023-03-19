const OtherDeatails = require("../models/otherDetails.model")
const User = require("../models/user.model")
const customError = require("../errors")

const createOtherDetails = async ({obj}) => {
	const isUserValid = await User.findOne({_id: obj.user})

	if(!isUserValid){
		throw new customError.NotFound(`User with id: ${obj.user} not found`)
	}

	const otherDetail = await OtherDeatails.create({...obj})
	return otherDetail 
}

const getAllOtherDetails = async () => {
	const otherDetails = await OtherDeatails.find({})
	return otherDetails
}

const getSingleOtherDetails = async (id) => {
	const otherDetail = await OtherDeatails.findOne({_id: id})

	if(!otherDetail){
		throw new customError.NotFound(`Other details with id: ${id} not found`)
	}
	
	return otherDetail
}

const updateOtherDetails = async ({id, obj}) => {
	let otherDetail = await OtherDeatails.findOne({_id: id})

	if(!otherDetail){
		throw new customError.NotFound(`Other details with id: ${id} not found`)
	}

	if(obj?.user){
		const isUserValid = await User.findOne({_id: obj.user})
		if(!isUserValid){
			throw new customError.NotFound(`User with id: ${obj.user} not found`)
		}
	}

	Object.assign(otherDetail, obj)
	await otherDetail.save()
	return otherDetail
}

const deleteOtherDetails = async (id) => {
	let otherDetail = await OtherDeatails.findOne({_id: id})

	if(!otherDetail){
		throw new customError.NotFound(`Other details with id: ${id} not found`)
	}
	
	otherDetail = await OtherDeatails.findOneAndRemove({_id: id})
	return otherDetail
}

module.exports = {
	createOtherDetails,
	getAllOtherDetails,
	getSingleOtherDetails,
	updateOtherDetails,
	deleteOtherDetails
}