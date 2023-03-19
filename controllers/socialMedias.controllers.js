const socialMediaServices = require("../services/socialMedias.services")
const {StatusCodes} = require("http-status-codes")
const objectSelector = require("../utils/object/objectSelector")

const schemaObj = ["media", "link", "user"]

const createSocialMedia = async (req, res) => {
	const obj = objectSelector(req.body, schemaObj)
	const socialMedia = await socialMediaServices.createSocialMedia({obj})
	res.status(StatusCodes.CREATED).json({data: socialMedia})
}

const getAllSocialMedia = async (req, res) => {
	const socialMedia = await socialMediaServices.getAllSocialMedia()
	res.status(StatusCodes.OK).json({data: socialMedia, count: socialMedia.length})
}

const getSingleSocialMedia = async (req, res) => {
	const {id: smId} = req.params
	const socialMedia = await socialMediaServices.getSingleSocialMedia(smId)
	res.status(StatusCodes.OK).json({data: socialMedia})
}

const updateSocialMedia = async (req, res) => {
	const {id: smId} = req.params
	const obj = objectSelector(req.body, schemaObj)
	const socialMedia = await socialMediaServices.updateSocialMedia({smId, obj})
	res.status(StatusCodes.OK).json({data: socialMedia})
}

const deleteSocialMedia = async (req, res) => {
	const {id: smId} = req.params
	const socialMedia = await socialMediaServices.deleteSocialMedia(smId)
	res.status(StatusCodes.OK).json({data: socialMedia, msg: "Social media deleted successfully"})
}

module.exports = {
	createSocialMedia,
	getAllSocialMedia,
	getSingleSocialMedia,
	updateSocialMedia, 
	deleteSocialMedia
}