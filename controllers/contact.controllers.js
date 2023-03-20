const contactServices = require("../services/contact.services")
const {StatusCodes} = require("http-status-codes")

const sendEmail = async (req, res) => {
	const {username} = req.params
	const {name, email, phone, message} = req.body
	
	await contactServices.sendEmail({username, name, email, phone, message})
	res.status(StatusCodes.OK).json({msg: "Email sent successfully"})
}

module.exports = {
	sendEmail
}