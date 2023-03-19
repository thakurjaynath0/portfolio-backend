const skillsServices = require("../services/skills.services")
const {StatusCodes} = require("http-status-codes")
const objectSelector = require("../utils/object/objectSelector")

const schemaObj =  ["category", "skills", "name", "level", "user"]

const createSkills = async (req, res) => {
	const obj = objectSelector(req.body, schemaObj)
	const skills = await skillsServices.createSkills({obj})
	res.status(StatusCodes.CREATED).json({data: skills})
}

const getAllSkills = async (req, res) => {
	const skills = await skillsServices.getAllSkills()
	res.status(StatusCodes.OK).json({data: skills, count: skills.length})
}

const getSingleSkills = async (req, res) => {
	const {id: skillsId} = req.params
	const skills = await skillsServices.getSingleSkills(skillsId)
	res.status(StatusCodes.OK).json({data: skills})
}

const updateSkills = async (req, res) => {
	const {id: skillsId} = req.params
	const obj = objectSelector(req.body, schemaObj)
	const skills = await skillsServices.updateSkills({skillsId, obj})
	res.status(StatusCodes.OK).json({data: skills})
}

const deleteSkills = async (req, res) => {
	const {id: skillsId} = req.params
	const skills = await skillsServices.deleteSkills(skillsId)
	res.status(StatusCodes.OK).json({data: skills, msg: "Skills successfully deleted"})
}

module.exports = {
	createSkills,
	getAllSkills,
	getSingleSkills,
	updateSkills,
	deleteSkills
}