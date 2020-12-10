module.exports = {
	name: "Drupal 8", // optional, falls back to object key
	description: "Drupal 8 performance scores",
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
		"https://www.bhmschools.org/",
		"https://www.ecrac.org/",
		"https://www.revenue.state.mn.us/",
		"https://www.graywolfpress.org/",
		"https://www.lawhelpmn.org/",
		"https://www.uwstout.edu/",
		"https://www.minneapolis.edu/",
		"https://www.mtcrimevictimhelp.org/",
		"https://stemtc.scimathmn.org/",
		"https://www.cgsi.org/",
		"https://msimulation.umn.edu/",
		"https://www.wilder.org/", 
		"https://globalhealthcenter.umn.edu/",
	]
};