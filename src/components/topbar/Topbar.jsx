import "./topbar.scss";
import { Mail } from "@material-ui/icons";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export default function Topbar({ menuOpen, setMenuOpen }) {
	return (
		<div className={`topbar ${menuOpen ? "active" : ""}`}>
			<div className="wrapper">
				<div className="left">
					<a href="#intro" className="logo">
						Ak.
					</a>
					<div className="itemContainer">
						<LinkedInIcon className="icon" />
						<a
							className="linkedInHref"
							target="_blank"
							rel="noreferrer"
							href="https://www.linkedin.com/in/aman-kumar-71b655158/"
						>
							Aman Kumar
						</a>
					</div>
					<div className="itemContainer">
						<Mail className="icon" />
						<span>isharaman8@gmail.com</span>
					</div>
				</div>

				<div className="right">
					<ul className="topBarHrefs">
						<li onClick={() => setMenuOpen(false)}>
							<a href="#intro">Home</a>
						</li>
						<li onClick={() => setMenuOpen(false)}>
							<a href="#about">About</a>
						</li>
						<li onClick={() => setMenuOpen(false)}>
							<a href="#techstack">Tech Stack</a>
						</li>
						<li onClick={() => setMenuOpen(false)}>
							<a href="#portfolio">Projects</a>
						</li>
					</ul>
					<div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
						<span className="line1"></span>
						<span className="line2"></span>
						<span className="line3"></span>
					</div>
				</div>
			</div>
		</div>
	);
}
