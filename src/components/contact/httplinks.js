class HttpLink {
	constructor(link, icon, id) {
		this.link = link;
		this.icon = `assets/${icon}`;
		this.id = id;
	}
}

export const httpLinksArray = [
	{
		...new HttpLink("https://twitter.com/aman1234554321", "twitter.png", 1),
	},
	{
		...new HttpLink(
			"https://www.linkedin.com/in/aman-kumar-71b655158/",
			"linkedin-logo.png",
			2
		),
	},
	{
		...new HttpLink(
			"https://www.instagram.com/isharaman8/",
			"instagram.png",
			3
		),
	},
	{
		...new HttpLink("https://github.com/isharaman8/", "github.png", 4),
	},
	{
		...new HttpLink("https://wa.me/919682560897", "whatsapp.png", 5),
	},
	{
		...new HttpLink("mailto:isharaman8@gmail.com", "email.png", 6),
	},
];
