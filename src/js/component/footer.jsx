import React from "react";
import PropType from "prop-types";

const Footer = (props) => {
	return (
		<nav className="navbar navbar-light bg-dark p-5 mt-3">
			<div className="container text-white">
				<p className="position-absolute top-50 start-50 translate-middle">
					{props.textFooter}
				</p>
			</div>
		</nav>
	);
};

Footer.prototype = {
	textFooter: PropType.string,
};

export default Footer;
