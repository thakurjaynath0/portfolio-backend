const objectSelector = (obj, filterArray) => {
	let resultObj= {}

	for(let prop in obj){
		if(filterArray.includes(prop)){
			resultObj[prop] = obj[prop]
		}
	}
	return resultObj
}

// obj = {
// 	name: "hello",
// 	lname: "there",
// 	hu: "solid",
// 	age: 90,
// 	k: {
// 		he: "somthing",
// 		to: "hlsjf"
// 	}
// }

// const result = objectSelector(obj, ["name", "he"])
// console.log(result)

module.exports = objectSelector