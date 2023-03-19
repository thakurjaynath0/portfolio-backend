const mongoose = require('mongoose')

const ProjectCategorySchema = mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    } 
}, {toJSON: {virtuals: true}, toObject: {virtuals: true}})

ProjectCategorySchema.virtual("projects", {
    ref: "Project",
    localField: "_id",
    foreignField: "category",
    justOne: false
})

module.exports = mongoose.model("ProjectCategory", ProjectCategorySchema)
