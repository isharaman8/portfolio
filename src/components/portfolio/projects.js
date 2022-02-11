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
			"pulsePharmaFixed.jpg",
			"Pulse Plus Clone",
			"An online pharmacy website where customers can easily get the medicine they need at very low prices and they can easily buy medicine here.",
			"https://github.com/Rohanverma4/UNIT_2_PROJECT_TESTING",
			"1",
			"https://61ff9721624257b707b4e751--pulsepluspharmacy.netlify.app/"
		),
	},
	{
		...new Project(
			"frontendFixed.jpg",
			"Frontend Masters Clone",
			"An online learning platform which mainly focuses on frontend parts - hence the name frontendmasters.",
			"https://github.com/jishanpatel7/FrontEndMasters-Website",
			"2",
			"https://safe-woodland-02335.herokuapp.com/"
		),
	},
	{
		...new Project(
			"jobsapiFixed.jpg",
			"Jobs Api",
			"A mock api where users can log in and apply for jobs",
			"https://github.com/isharaman8/Jobs-Api",
			"3",
			"https://serene-brook-67360.herokuapp.com/"
		),
	},
];
