const mongoose = require('mongoose')

const SkillCategorySchema = mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    }
},{ toJSON: { virtuals: true }, toObject:{ virtuals: true }})

SkillCategorySchema.virtual("skills", {
    ref: "Skills",
    localField: "_id",
    foreignField: "category",
    justOne: false
})

module.exports = mongoose.model('SkillCategory', SkillCategorySchema)
