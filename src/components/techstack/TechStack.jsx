import { techArr } from "./techStack";
import "./tech.scss";

export default function TechStack() {
	return (
		<div id="techstack" className="techstack">
			<h1 className="skillsHeading">Skills</h1>

			<div className="wrapper">
				<div className="leftPara">
					<ul>
						<li>
							Building Responsive web applications with VanillaJs and Reactjs.
						</li>
						<li>
							Creating backend applications using Nodejs, Express and Mongodb.
						</li>
						<li>Building Restful API's</li>
						<li>Sound Knowledge of Data structures and Algorithms</li>
					</ul>
				</div>
				<div className="rightTech">
					<h1>Full Stack Developement</h1>
					<div className="stackIcons">
						{techArr.map((onetech) => {
							const { id, img } = onetech;
							return <img key={id} src={img} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
