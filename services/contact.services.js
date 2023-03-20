const User = require("../models/user.model")
const OtherDetails = require("../models/otherDetails.model")
const customError = require("../errors")
const {sendContactMail} = require("../utils/email/index")

const sendEmail = async ({username, name, email, phone, message}) => {
	const user = await User.findOne({username: username})

	if(!user){
		throw new customError.NotFound(`User with username: ${username} not found`)
	}
	const otherDetails = await OtherDetails.findOne({user: user._id})

	if(!otherDetails){
		throw new customError.BadRequest(`Cannot send email.`)
	}

	await sendContactMail({name, email: email, phone, msg: message, useremail: otherDetails?.email})
}

module.exports = {
	sendEmail
}