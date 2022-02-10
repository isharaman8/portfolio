import { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";

export default function Intro() {
	const textRef = useRef();

	useEffect(() => {
		init(textRef.current, {
			showCursor: true,
			backDelay: 1500,
			strings: ["Web_Developer"],
		});
	}, []);

	return (
		<div className="intro" id="intro">
			<div className="left">
				<div className="imgContainer">
					<img src="assets/codingman.gif" alt="" />
				</div>
			</div>
			<div className="right">
				<div className="wrapper">
					<h2>Hi There, I'm</h2>
					<h1>Aman Kumar</h1>
					<h3>
						Full Stack <span ref={textRef}> Web Developer </span>
					</h3>
				</div>
				<a href="#about">
					<img src="assets/arrow-down-sign-to-navigate.png" alt="" />
				</a>
			</div>
		</div>
	);
}
