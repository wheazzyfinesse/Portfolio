import React from "react";

const Socials = () => {
	return (
		<div className="home__social">
			<a
				href="https://www.instagram.com/"
				className="home__social-icon"
				target="_blank"
				rel="noreferrer"
			>
				<i className="uil uil-instagram"></i>
			</a>

			<a
				href="https://www.twitter.com/"
				className="home__social-icon"
				target="_blank"
				rel="noreferrer"
			>
				<i className="uil uil-twitter"></i>
			</a>

			<a
				href="https://github.com/"
				className="home__social-icon"
				target="_blank"
				rel="noreferrer"
			>
				<i className="uil uil-github-alt"></i>
			</a>
		</div>
	);
};

export default Socials;
