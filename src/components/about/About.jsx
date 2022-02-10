import "./about.scss";

export default function About() {
	return (
		<div className="about" id="about">
			<div className="imgDiv">
				<img src="assets/my_pic.png" />
			</div>
			<div className="aboutPara">
				<h1 className="mainHeading">About Me</h1>
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

			<a href="#portfolio">
				<img src="assets/arrow-down-sign-to-navigate.png" alt="" />
			</a>
		</div>
	);
}
