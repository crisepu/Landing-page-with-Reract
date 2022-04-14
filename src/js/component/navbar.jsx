import React from "react";
import PropType from "prop-types";

const Navbar = (props) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand text-light" href="#">
					Bootstrap with React
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse d-flex flex-row-reverse bd-highlight"
					id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a
							className="nav-link text-light"
							aria-current="page"
							href="#">
							Home
						</a>
						<a className="nav-link text-muted" href="#">
							Features
						</a>
						<a className="nav-link text-muted" href="#">
							Pricing
						</a>
						<a className="nav-link disabled text-muted">Disabled</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
