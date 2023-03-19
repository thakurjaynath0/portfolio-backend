const router = require("express").Router()

const {	createEducation, getAllEducation, getSingleEducation, updateEducation, deleteEducation} = require("../../controllers/education.controllers")
const validate = require("../../middlewares/validate")
const {educationValidations} = require("../../validations")

router.route("/").get(getAllEducation).post([validate(educationValidations.createEducation)], createEducation)
router.route("/:id").get(getSingleEducation).patch([validate(educationValidations.updateEducation)], updateEducation).delete(deleteEducation)

module.exports = router