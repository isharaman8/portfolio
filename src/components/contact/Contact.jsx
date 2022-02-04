import { useState } from "react";
import "./contact.scss";

export default function Contact() {
	const [message, setMessage] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		setMessage(true);
	};
	return (
		<div className="contact" id="contact">
			<div className="left">
				<img src="assets/handshake-blue.svg" alt="" />
			</div>
			<div className="right">
				<h2>Contact.</h2>
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="Email" />
					<textarea placeholder="Message"></textarea>
					<button>Send</button>
					{message && <span>Thanks, I'll Reply ASAP :)</span>}
				</form>
			</div>
		</div>
	);
}
