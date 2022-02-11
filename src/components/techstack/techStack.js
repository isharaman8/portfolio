class TechStack {
	constructor(img, name, id) {
		this.img = `assets/${img}`;
		this.name = name;
		this.id = id;
	}
}

export const techArr = [
	{
		...new TechStack("html-5.png", "HTML", "1"),
	},
	{
		...new TechStack("css.png", "css", "2"),
	},
	{
		...new TechStack("js.png", "JavaScript", "3"),
	},
	{
		...new TechStack("node-js.png", "nodeJS", "4"),
	},
	{
		...new TechStack("expressjs-icon.svg", "ExpressJS", "5"),
	},
	{
		...new TechStack("mongodb.png", "mongodb", "6"),
	},
	{
		...new TechStack("react.png", "reactjs", "7"),
	},
	{
		...new TechStack("redux.png", "Redux", "8"),
	},
	{
		...new TechStack("git.svg", "Git", "9"),
	},
	{
		...new TechStack("heroku.svg", "Heroku", "10"),
	},
	{
		...new TechStack("netlify.svg", "netlify", "11"),
	},
	{
		...new TechStack("npm.svg", "NPM", "12"),
	},
	{
		...new TechStack("postman.svg", "Postman", "13"),
	},
	{
		...new TechStack("sass.svg", "SASS", "14"),
	},
	{
		...new TechStack("typescript.svg", "TypeScript", "15"),
	},
];
