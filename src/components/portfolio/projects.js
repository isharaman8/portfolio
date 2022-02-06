class Project {
	constructor(img, title, desc, gitLink, id, deployLink) {
		this.img = `assets/${img}`;
		this.title = title;
		this.desc = desc;
		this.gitLink = gitLink;
		this.id = id;
		this.deployLink = deployLink;
	}
}

export const projectArr = [
	{
		...new Project(
			"pulsePlusPharma.png",
			"Pulse Plus Clone",
			"An online pharmacy website where customers can easily get the medicine they need at very low prices and they can easily buy medicine here.",
			"https://github.com/Rohanverma4/UNIT_2_PROJECT_TESTING",
			"1",
			""
		),
	},
	{
		...new Project(
			"frontendmasters.jpg",
			"Frontend Masters Clone",
			"An online learning platform which mainly focuses on frontend parts - hence the name frontendmasters.",
			"https://github.com/jishanpatel7/FrontEndMasters-Website",
			"2",
			""
		),
	},
	{
		...new Project(
			"jobsapi.jpg",
			"Jobs Api",
			"A mock api where users can log in and apply for jobs",
			"https://github.com/isharaman8/Jobs-Api",
			"3",
			""
		),
		...new Project(
			"threejslandingpage.jpg",
			"ThreeJS Landing Page",
			"A demonstration of landing page built using threejs library",
			"https://github.com/isharaman8/threejs-mini-projects/tree/main/threejs-landing-page",
			"4",
			"https://61fe8d84b19bda444dbd6ec1--threejs-landing-page.netlify.app/"
		),
	},
];

// Its a learning platform which mainly focuses on frontend parts - hence the name frontendmasters.
//  This is a pharmacy website where customers can easily get the medicine they need at very low prices and they can easily buy medicine here.
