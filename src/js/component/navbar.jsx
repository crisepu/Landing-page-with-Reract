import React from "react";
import PropType from "prop-types";

const Navbar = (props) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark px-3">
			<div className="container-fluid">
				<a className="navbar-brand text-white" href="#">
					{props.brand}
				</a>
				<button
					className="navbar-toggler text-muted"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon text-white"></span>
				</button>
				<div
					className="collapse navbar-collapse "
					id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a
								className="nav-link active text-white"
								aria-current="page"
								href="#">
								{props.nav1}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-muted" href="#">
								{props.nav2}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-muted" href="#">
								{props.nav3}
							</a>
						</li>

						<li className="nav-item">
							<a
								className="nav-link disabled text-muted"
								href="#"
								tabindex="-1"
								aria-disabled="true">
								{props.nav4}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

Navbar.PropType = {
	brand: PropType.string,
	nav1: PropType.string,
	nav2: PropType.string,
	nav3: PropType.string,
	nav4: PropType.string,
};

export default Navbar;
