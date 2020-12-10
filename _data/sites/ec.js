module.exports = {
	name: "Electric Citizen", // optional, falls back to object key
	description: "Electric Citizen performance scores",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: false, 
	options: {
		frequency: 60 * 11 + 30, // 11h, 30m
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run",
	},
	urls: [
		"https://www.electriccitizen.com/",
		"https://www.graywolfpress.org/",
		"https://www.asimn.org/",
		"https://www.bloomingtonmn.gov/",
		"https://law.umn.edu/",
		"https://www.uwstout.edu/",
		"https://www.minneapolis.edu/",
		"https://www.inclusivechildcare.org/",
		"https://www.coursesource.org/",
		"https://www.cgsi.org/",
		"https://www.lawhelpmn.org/",
	]
};