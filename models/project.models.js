const mongoose = require("mongoose")

const ProjectSchema = mongoose.Schema({
	category: {
		type: mongoose.Types.ObjectId,
		ref: 'ProjectCateory',
		required: true
	},
	title: {
		type: String,
		required: [true, "title is required"]
	},
	description: {
		type: String,
		required: true
	},
	type: {
		type: String,
		enum: ["group", "single"],
		required: true
	},
	photos: [{
		type: String,
		requred: true
	}],
	languages: [{
		type: String,
		required: true,
	}],
	time: {
		type: String,
		required: true
	},
	members: {
		type: Number
	},
	user: {
		type: mongoose.Types.ObjectId,
		ref: "User",
		required: true
	}
}, {timestamps: true})

// ProjectSchema.groupProjects = async function (userId) {
// 	const result = await this.aggregate([
// 		{
// 			$group: {
// 				_id: {
// 					user: this.user,
// 					category: this.category
// 				}
// 			}
// 		}
// 	])

// 	return result
// } 

module.exports = mongoose.model("Project", ProjectSchema)
