const mongoose = require("mongoose")

const EducationSchema = mongoose.Schema({
	course: {
		type: String,
		required: true
	},
	institution: {
		type: String,
		required: true
	},
	location: {
		type: String,
		required: true
	},
	from: {
		type: String,
		required: true
	},
	to: {
		type: String,
		required: true
	},
	user: {
		type: mongoose.Types.ObjectId,
		ref: "User",
		required: true
	}
})

module.exports = mongoose.model("Education", EducationSchema)