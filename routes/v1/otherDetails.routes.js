const router = require("express").Router()

const {createOtherDetails, getAllOtherDetails, getSingleOtherDetails, updateOtherDetails, deleteOtherDetails} = require("../../controllers/otherDetails.controllers")
const validate = require("../../middlewares/validate")
const {otherDetailsValidations} = require("../../validations")

router.route("/").get(getAllOtherDetails).post([validate(otherDetailsValidations.createOtherDetails)], createOtherDetails)
router.route("/:id").get(getSingleOtherDetails).patch([validate(otherDetailsValidations.updateOtherDetails)], updateOtherDetails).delete(deleteOtherDetails)

module.exports = router