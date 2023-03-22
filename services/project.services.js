const Project = require("../models/project.models")
const ProjectCategory  = require("../models/category/project.category.model")
const User = require("../models/user.model")
const customError = require("../errors")
const objectSelector = require("../utils/object/objectSelector")

const createProject = async ({obj}) => {
	const isUserValid = await User.findOne({_id: obj.user})
	if(!isUserValid){
		throw new customError.NotFound(`User with id:${obj.user} not found`)
	}

	const isCategoryValid = await ProjectCategory.findOne({_id: obj.category})
	if(!isCategoryValid){
		throw new customError.NotFound(`Project catefory with id: ${obj.category} not found`)
	}

	const project = await Project.create({...obj})
	return project
}

const getAllProjects = async () => {
	const projects = await Project.find({})
	return projects
}

const getSingleProject = async (projectId) => {
	const project = await Project.findOne({_id: projectId})

	if(!project){
		throw new customError.NotFound(`Project with id: ${projectId} not found`)
	}

	const projectCategory = await ProjectCategory.findOne({_id: project.category})
	let singleProject = objectSelector(project, ["_id", "title", "description", "type", "photos", "languages", "time", "members", "user"])
	singleProject.category = projectCategory.category
	return singleProject
}

const updateProject = async ({projectId, obj}) => {
	let project = await Project.findOne({_id: projectId})
	
	if(!project){
		throw new customError.NotFound(`Project with id: ${projectId} not found`)
	}

	if(obj?.user){
		const isUserValid = await User.findOne({_id: obj.user})
		if(!isUserValid){
			throw new customError.NotFound(`User with id:${obj.user} not found`)
		}
	}

	if(obj?.category){
		const isCategoryValid = await ProjectCategory.findOne({_id: obj.category})
		if(!isCategoryValid){
			throw new customError.NotFound(`Project catefory with id: ${obj.category} not found`)
		}
	}

	Object.assign(project, obj)
	await project.save()
	
	return project
}

const deleteProject = async (projectId) => {
	let project = await Project.findOne({_id: projectId})
	
	if(!project){
		throw new customError.NotFound(`Project with id: ${projectId} not found`)
	}

	project = await Project.findOneAndRemove({_id: projectId})
	return project
}

module.exports = {
	createProject,
	getAllProjects,
	getSingleProject,
	updateProject,
	deleteProject
}