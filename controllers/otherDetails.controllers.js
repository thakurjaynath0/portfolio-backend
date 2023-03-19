const otherDetailServices = require("../services/otherDetails.services")
const {StatusCodes} = require("http-status-codes")
const objectSelector = require("../utils/object/objectSelector")

const schemaObj = ["tagline", "email", "description", "age", "contact", "from", "user"]

const createOtherDetails = async (req, res) => {
	const obj = objectSelector(req.body, schemaObj)
	const otherDetail = await otherDetailServices.createOtherDetails({obj})
	res.status(StatusCodes.CREATED).json({data: otherDetail})
}

const getAllOtherDetails = async (req, res) => {
	const otherDetails = await otherDetailServices.getAllOtherDetails()
	res.status(StatusCodes.OK).json({data: otherDetails, count: otherDetails.length})
}

const getSingleOtherDetails = async (req, res) => {
	const {id} = req.params
	const otherDetail = await otherDetailServices.getSingleOtherDetails(id)
	res.status(StatusCodes.OK).json({data: otherDetail})
}

const updateOtherDetails = async (req, res) => {
	const {id} = req.params
	const obj = objectSelector(req.body, schemaObj)
	const otherDetail = await otherDetailServices.updateOtherDetails({id, obj})
	res.status(StatusCodes.OK).json({data: otherDetail})
}

const deleteOtherDetails = async (req, res) => {
	const {id} = req.params
	const otherDetail = await otherDetailServices.deleteOtherDetails(id)
	res.status(StatusCodes.OK).json({data: otherDetail, msg: "Other details successfully deleted"})
}

module.exports = {
	createOtherDetails,
	getAllOtherDetails,
	getSingleOtherDetails,
	updateOtherDetails,
	deleteOtherDetails
}