import "./portfolio.scss";

function SingleProjectDesc({
	img,
	title,
	desc,
	gitLink,
	deployLink,
	projectTech,
	features,
}) {
	return (
		<div className="oneProject">
			<div className="wrapper">
				<div className="leftDesc">
					<h1>{title}</h1>
					<p>{desc}</p>

					<ul className="featuresUl">
						{features.map((onefeature) => {
							return <li>{onefeature}</li>;
						})}
					</ul>
					<div className="projectTechImages">
						{projectTech.map((oneImg) => {
							return <img src={oneImg} alt="projectTech" />;
						})}
					</div>

					<span className="hrefButtonSpans">
						<button onClick={() => window.open(gitLink, "_blank")}>
							Github Link
						</button>
						<button onClick={() => window.open(deployLink, "_blank")}>
							Deploy Link
						</button>
					</span>
				</div>
				<div className="rightImage">
					<img src={img} alt="image" />
				</div>
			</div>
		</div>
	);
}

export default SingleProjectDesc;
