const projectServices = require("../services/project.services")
const {StatusCodes} = require("http-status-codes")
const objectSelector = require("../utils/object/objectSelector")

const schemaObj = ["category", "title", "description", "type", "photos", "languages", "time", "members", "user"]

const createProject = async (req, res) => {
	const obj = objectSelector(req.body, schemaObj)
	const project = await projectServices.createProject({obj})
	res.status(StatusCodes.CREATED).json({data: project})
}

const getAllProjects = async (req, res) => {
	const projects = await projectServices.getAllProjects()
	res.status(StatusCodes.OK).json({data: projects, count: projects.length})
}

const getSingleProject = async (req, res) => {
	const {id: projectId} = req.params
	const project = await projectServices.getSingleProject(projectId)
	res.status(StatusCodes.OK).json({data: project})
}

const updateProject = async (req, res) => {
	const {id: projectId} = req.params
	const obj = objectSelector(req.body, schemaObj)
	const project = await projectServices.updateProject({projectId, obj})
	res.status(StatusCodes.OK).json({data: project})
}

const deleteProject = async (req, res) => {
	const {id: projectId} = req.params
	const project = await projectServices.deleteProject(projectId)
	res.status(StatusCodes.OK).json({data: project, msg: "Project successfully deleted"})
}

module.exports = {
	createProject,
	getAllProjects,
	getSingleProject,
	updateProject,
	deleteProject
}