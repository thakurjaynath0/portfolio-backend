const router = require("express").Router()

const {	createProject, getAllProjects, getSingleProject, updateProject, deleteProject} = require("../../controllers/project.controllers")
const validate = require("../../middlewares/validate")
const {projectValidations} = require("../../validations")

router.route("/").get(getAllProjects).post([validate(projectValidations.createProject)], createProject)
router.route("/:id").get(getSingleProject).patch([validate(projectValidations.updateProject)], updateProject).delete(deleteProject)

module.exports = router