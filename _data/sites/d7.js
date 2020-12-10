module.exports = {
	name: "Drupal 7", // optional, falls back to object key
	description: "Drupal 7 performance scores",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	estimatedTimePerBuild: .3,
	options: {
		frequency: 60 * 23, // 24 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run",
	},
	urls: [
		"https://cuhcc.umn.edu/",
		"https://www.bsmschool.org/",
		"https://www.century.edu/",
		"https://www.graywolfpress.org/",
		"https://www.bloomingtonmn.gov/",
		"https://www.coursesource.org/",
		"https://www.minneapolis.edu/",
		"https://www.cvt.org/",
		"https://www.ufcw663.org/",
		"https://clinicalaffairs.umn.edu/",
	]
};