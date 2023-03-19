const express = require("express")
const router = express.Router()

const userRoutes = require("./user.routes")
const uploadRoutes = require("./upload.routes")
const projectRoutes = require("./project.routes")
const skillsRoutes = require("./skills.routes")
const educationRoutes = require("./education.routes")
const projectCategoryRoutes = require("./project.category.routes")
const skillsCategoryRoutes = require("./skills.category.routes")
const socialMediasRoutes = require("./socialMedias.routes")
const otherDetailsRoutes = require("./otherDetails.routes")

const routes = [
	/**
	 * @type {Object} => {path, route}
	 * @param {path} String 
	 * @param {route} express.Router()
	 */
	{
		path: "/users",
		route: userRoutes
	},
	{
		path: "/upload",
		route: uploadRoutes
	}, 
	{
		path: "/project",
		route: projectRoutes
	},
	{
		path: "/skills",
		route: skillsRoutes
	},
	{
		path: "/education",
		route: educationRoutes
	},
	{
		path: "/projectcategory",
		route: projectCategoryRoutes
	}, 
	{
		path: "/skillscategory",
		route: skillsCategoryRoutes
	},
	{
		path: "/social/media",
		route: socialMediasRoutes
	},
	{
		path: "/others",
		route: otherDetailsRoutes
	}
]

routes.map(route => {
	router.use(route.path, route.route)
})

module.exports = router