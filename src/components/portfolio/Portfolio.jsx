import "./portfolio.scss";
import { projectArr } from "./projects";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function Portfolio() {
	return (
		<div className="portfolio" id="portfolio">
			<h1>My Projects</h1>

			<div className="container">
				{projectArr.map((oneProject) => {
					const { img, title, desc, gitLink, id, deployLink } = oneProject;

					return (
						<div key={id} className="item">
							<img src={img} alt="" />
							<h3>
								<a rel="noreferrer" target="_blank" href={deployLink}>
									{title}
								</a>
								<a rel="noreferrer" target="_blank" href={gitLink}>
									<GitHubIcon />
								</a>{" "}
							</h3>
							<p>{desc}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
