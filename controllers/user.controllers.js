const {StatusCodes} = require("http-status-codes")
const userServices = require("../services/user.services")
const aboutServices = require("../services/about.services")
const objectSelector = require("../utils/object/objectSelector")

const schemaObj = ["username", "name", "picture"]

const createUser = async (req, res) => {
	const obj = objectSelector(req.body,schemaObj )
	const user = await userServices.createUser({obj});
	res.status(StatusCodes.CREATED).json({data: user})
}

const getAllUsers = async (req, res) => {
	const users = await userServices.getAllUsers()
	res.status(StatusCodes.OK).json({data: users, count: users.length})
}

const getSingleUser = async (req, res) => {
	const {id: userId} = req.params
	const user = await userServices.getSingleUser(userId)
	res.status(StatusCodes.OK).json({data: user})
}

const updateUser = async (req, res) => {
	const {id: userId} = req.params
	const obj = objectSelector(req.body, schemaObj)
	const user = await userServices.updateUser({userId, obj})
	res.status(StatusCodes.OK).json({data: user})
}

const deleteUser = async (req, res) => {
	const {id: userId} = req.params
	const user = await userServices.deleteUser(userId)
	res.status(StatusCodes.OK).json({data: user, msg: "User successfully delete"})
}

const getUserDetails = async (req, res) => {
	const {username} = req.params
	const userDetails = await aboutServices.getUserDetails(username)
	res.status(StatusCodes.OK).json({data: userDetails})
}

module.exports = {
	createUser,
	getAllUsers,
	getSingleUser,
	updateUser,
	deleteUser,
	getUserDetails
}