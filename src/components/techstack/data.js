class SliderData {
	constructor(id, icon, title, desc, img) {
		this.id = id;
		this.icon = icon;
		this.title = title;
		this.desc = desc;
		this.img = img;
	}
}

export const dataArr = [
	{
		...new SliderData(
			"1",
			"./assets/coding.png",
			"Web App",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facilis voluptatem fugiat.",
			"https://media.istockphoto.com/vectors/creative-vector-illustration-of-programming-html-code-on-computer-vector-id1008826040"
		),
	},
	{
		...new SliderData(
			"2",
			"./assets/coding.png",
			"Api Application",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facilis voluptatem fugiat.",
			"https://i.pinimg.com/originals/5c/c5/0a/5cc50a14253e666986d15b675ecdd521.jpg"
		),
	},
	{
		...new SliderData(
			"3",
			"./assets/coding.png",
			"Three Js Project",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facilis voluptatem fugiat.",
			"https://alexandrugris.github.io/assets/webgl_2.png"
		),
	},
];
