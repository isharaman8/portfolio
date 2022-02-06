import "./about.scss";
import { techArr } from "./techStack";

export default function About() {
	return (
		<div className="about" id="about">
			<div className="aboutPara">
				<h1>About Me</h1>
				<p>
					I'm an aspiring Web Developer. I have a serious passion for building
					amazing web applications. I am skilled in developing web apps using
					MERN stack and I've build many amazing projects which you can see
					below.
				</p>

				<h4 className="resumeLink">
					<a
						rel="noreferrer"
						target="_blank"
						href="https://drive.google.com/file/d/1sTRqYKzMYABBJ6AkEOdwD4EiLnrL8WSd/view?usp=sharing"
					>
						Resume
					</a>
				</h4>
			</div>

			<div className="techStack">
				<h1>Tech Stack</h1>

				<div className="techWrapper">
					{techArr.map((oneTech) => {
						const { img, name, id } = oneTech;
						return (
							<div key={id} className="oneTechStack">
								<img src={img} alt="" />
								<p>{name}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
