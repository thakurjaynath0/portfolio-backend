const educationServices = require("../services/education.services")
const {StatusCodes} = require("http-status-codes")
const objectSelector = require("../utils/object/objectSelector")

const schemaObj = ["course", "institution", "location", "from", "to", "user"]

const createEducation = async (req, res) => {
	const obj = objectSelector(req.body, schemaObj)
	const education = await educationServices.createEducation({obj})
	res.status(StatusCodes.CREATED).json({data: education})
}

const getAllEducation = async (req, res) => {
	const educations = await educationServices.getAllEducation()
	res.status(StatusCodes.OK).json({data: educations, count: educations.length})
}

const getSingleEducation = async (req, res) => {
	const {id: eduId} = req.params
	const education = await educationServices.getSingleEducation(eduId)
	res.status(StatusCodes.OK).json({data: education})
}

const updateEducation = async (req, res) => {
	const {id: eduId} = req.params
	const obj = objectSelector(req.body, schemaObj)
	const education = await educationServices.updateEducation({eduId, obj})
	res.status(StatusCodes.OK).json({data: education})
}

const deleteEducation = async (req, res) => {
	const {id: eduId} = req.params
	const education = await educationServices.deleteEducation(eduId)
	res.status(StatusCodes.OK).json({data: education, msg: "Education successfully deleted"})
}

module.exports = {
	createEducation,
	getAllEducation,
	getSingleEducation,
	updateEducation,
	deleteEducation
}