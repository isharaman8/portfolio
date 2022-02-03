import "./work.scss";

export default function Works() {
	return (
		<div className="works" id="works">
			<div className="slider">
				<div className="container">
					<div className="item">
						<div className="left">
							<div className="leftContainer">
								<div className="imgContainer">
									<img src="assets/mobile_logo.png" alt="" />
								</div>
								<h2>Title</h2>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Quibusdam Natus ratione
								</p>
								<span>Projects</span>
							</div>
						</div>
						<div className="right">
							<img
								src="https://static.vecteezy.com/system/resources/previews/000/472/351/original/vector-web-development-banner-set.jpg"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
			<img src="assets/white_arrow.png" className="arrow left" alt="" />
			<img src="assets/white_arrow.png" className="arrow right" alt="" />
		</div>
	);
}
