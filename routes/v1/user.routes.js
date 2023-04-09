const router = require("express").Router()

const {	createUser, getAllUsers, getSingleUser, updateUser, deleteUser, getUserDetails, createCompleteUser} = require("../../controllers/user.controllers")
const validate = require("../../middlewares/validate")
const {userValidations} = require("../../validations")
const {completeUserValidations} = require("../../validations")

router.route("/").get(getAllUsers).post([validate(userValidations.createUser)], createUser)
router.route("/:id").get(getSingleUser).patch([validate(userValidations.updateUser)], updateUser).delete(deleteUser)
router.route("/details/:username").get(getUserDetails)
router.post("/createuser", [validate(completeUserValidations.createComplteUser)], createCompleteUser)

module.exports = router