const mongoose = require("mongoose")

const SkillsSchema = mongoose.Schema({
	category: {
		type: mongoose.Types.ObjectId,
		ref: "SkillCategory",
		required: true
	},
	name: {
		type: String,
		required: true
	},
	level: {
		type: Number,
		required: true
	},
	user: {
		type: mongoose.Types.ObjectId,
		ref: "User",
		required: true
	}
}, {timestamps: true})

module.exports = mongoose.model("Skills", SkillsSchema)