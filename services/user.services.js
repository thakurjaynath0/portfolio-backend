const User = require("../models/user.model")
const customError = require("../errors")

const createUser = async ({obj}) => {
	const user = await User.create({...obj})
	return user
}

const getAllUsers = async () => {
	const users = await User.find({})
	return users
}

const getSingleUser = async (userId) => {
	const user = await User.findOne({_id: userId})
	
	if(!user){
		throw new customError.NotFound(`User with id: ${userId} not found`)
	}

	return user
}

const updateUser = async ({userId, obj}) => {
	let user = await User.findOne({_id: userId})

	if(!user){
		throw new customError.NotFound(`User with id: ${userId} not found`)
	}

	Object.assign(user, obj)
	await user.save()
	
	return user
}

const deleteUser = async (userId) => {
	let user = await User.findOne({_id: userId})

	if(!user){
		throw new customError.NotFound(`User with id: ${userId} not found`)
	}

	user = await User.findOneAndRemove({_id: userId})
	return user;
}

module.exports = {
	createUser,
	getAllUsers,
	getSingleUser,
	updateUser,
	deleteUser
}
