import "./portfolio.scss";
import { projectArr } from "./projects";
import SingleProjectDesc from "./SingleProjectDesc";

export default function Portfolio() {
	return (
		<div className="portfolio" id="portfolio">
			<h1 className="portfolioHeading">My Projects</h1>

			<div className="container">
				{projectArr.map((oneProject) => {
					const {
						img,
						title,
						desc,
						gitLink,
						id,
						deployLink,
						projectTech,
						features,
					} = oneProject;

					return (
						<SingleProjectDesc
							img={img}
							title={title}
							desc={desc}
							key={id}
							gitLink={gitLink}
							deployLink={deployLink}
							projectTech={projectTech}
							features={features}
						/>
					);
				})}
			</div>
		</div>
	);
}
