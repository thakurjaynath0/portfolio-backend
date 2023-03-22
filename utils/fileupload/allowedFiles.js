const allowedFiles = {
	image: "*",
	application: ["pdf"]
}

const checkFile = (mimetype) => {
	const [category, fileType] = mimetype.split("/")

	if (!allowedFiles[category]) {
		throw new Error("Unsupported file type .")
	}

	if (!(allowedFiles[category] === "*") && !(allowedFiles[category].includes(fileType))) {
		throw new Error("Unsupported file type .")
	}

	return true
}

module.exports = {
	checkFile
}
