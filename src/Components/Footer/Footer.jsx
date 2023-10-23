import React from "react";
import "./footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container container">
				<h1 className="footer__title">Finesse</h1>

				<ul className="footer__list">
					<li>
						<a href="#about" className="footer__link">
							About
						</a>
					</li>

					<li>
						<a href="#portfolio" className="footer__link">
							Projects
						</a>
					</li>

					<li>
						<a href="#testimonial" className="footer__link">
							Testimonials
						</a>
					</li>
				</ul>

				<div className="footer__social">
					<a
						href="https://facebook.com/wheazzyfinesse"
						className="footer__social-link"
						target="_blank"
						rel="noreferrer"
					>
						<i className="bx bxl-facebook"></i>
					</a>

					<a
						href="https://www.instagram.com/wheazzyfinesse"
						className="footer__social-link"
						target="_blank"
						rel="noreferrer"
					>
						<i className="bx bxl-instagram"></i>
					</a>

					<a
						href="https://www.twitter.com/wheazzyfinesse"
						className="footer__social-link"
						target="_blank"
						rel="noreferrer"
					>
						<i className="bx bxl-twitter"></i>
					</a>
				</div>

				<span className="footer__copy">
					&#169; Finesse. All rigths reserved
				</span>
			</div>
		</footer>
	);
};

export default Footer;
