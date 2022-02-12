class Project {
	constructor(
		img,
		title,
		desc,
		gitLink,
		id,
		deployLink,
		projectTech,
		features
	) {
		this.img = `assets/${img}`;
		this.title = title;
		this.desc = desc;
		this.gitLink = gitLink;
		this.id = id;
		this.deployLink = deployLink;
		this.projectTech = projectTech;
		this.features = features;
	}
}

export const projectArr = [
	{
		...new Project(
			"pulsePharmaFixed.jpg",
			"Pulse Plus Clone",
			"Plus Plus is an online pharmacy website where customers can easily get the medicines, book lab tests, and can consult doctors online.",
			"https://github.com/Rohanverma4/UNIT_2_PROJECT_TESTING",
			"1",
			"https://61ff9721624257b707b4e751--pulsepluspharmacy.netlify.app/",
			["assets/html-5.png", "assets/css.png", "assets/js.png"],
			[
				"User-friendly easy and secure purchasing system.",
				"Location-based medicine delivery.",
				"Sign-in/Sign-up for user.",
			]
		),
	},
	{
		...new Project(
			"frontendFixed.jpg",
			"Frontend Masters Clone",
			"Frontend Masters is an online learning platform which mainly focuses on frontend parts - hence the name frontendmasters. ",
			"https://github.com/jishanpatel7/FrontEndMasters-Website",
			"2",
			"https://safe-woodland-02335.herokuapp.com/",
			[
				"assets/html-5.png",
				"assets/css.png",
				"assets/js.png",
				"assets/node-js.png",
				"assets/mongodb.png",
				"assets/expressjs-icon.svg",
			],
			[
				"Responsive web design",
				"Backend authentication",
				"Real-time course search/filter option",
			]
		),
	},
	{
		...new Project(
			"jobsapiFixed.jpg",
			"Jobs Api",
			"It is a mock api where users can log in and apply for jobs. The documentation is built using SwaggerUI. It uses auth token for logging and registering users.",
			"https://github.com/isharaman8/Jobs-Api",
			"3",
			"https://serene-brook-67360.herokuapp.com/",
			["assets/node-js.png", "assets/mongodb.png", "assets/swaggerui.png"],
			[
				"CRUD operations on jobs",
				"Auth login/sign up",
				"Documentation built using SwaggerUI",
			]
		),
	},
];
