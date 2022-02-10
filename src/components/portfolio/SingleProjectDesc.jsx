import "./portfolio.scss";

function SingleProjectDesc({ img, title, desc, gitLink, deployLink }) {
	return (
		<div className="oneProject">
			<div className="wrapper">
				<div className="leftDesc">
					<h1>{title}</h1>
					<p>{desc}</p>
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
