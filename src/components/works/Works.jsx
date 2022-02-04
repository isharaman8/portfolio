import "./work.scss";
import { dataArr } from "./data";
import { useState } from "react";

export default function Works() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const handleClick = (way) => {
		way === "left"
			? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
			: setCurrentSlide(
					currentSlide < dataArr.length - 1 ? currentSlide + 1 : 0
			  );
	};
	return (
		<div className="works" id="works">
			<div
				className="slider"
				style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
			>
				{dataArr.map((oneData) => {
					const { title, icon, img, desc, id } = oneData;
					return (
						<div key={id} className="container">
							<div className="item">
								<div className="left">
									<div className="leftContainer">
										<div className="imgContainer">
											<img src={icon} alt="" />
										</div>
										<h2>{title}</h2>
										<p>{desc}</p>
										<span>Projects</span>
									</div>
								</div>
								<div className="right">
									<img src={img} alt="" />
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<img
				src="assets/white_arrow.png"
				className="arrow left"
				alt=""
				onClick={() => handleClick("left")}
			/>
			<img
				src="assets/white_arrow.png"
				className="arrow right"
				alt=""
				onClick={() => handleClick("right")}
			/>
		</div>
	);
}
