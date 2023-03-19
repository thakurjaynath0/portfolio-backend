const mongoose = require("mongoose")

const SocialMediaSchema = mongoose.Schema({
	media: {
		type: String,
		required: true
	},
	link: {
		type: String, 
		required: true
	},
	user: {
		type: mongoose.Types.ObjectId,
		ref: "User",
		required: true
	}
})

module.exports = mongoose.model("SocialMedias", SocialMediaSchema)