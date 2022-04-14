import React from "react";
import PropType from "prop-types";

const Jumbotron = (props) => {
	return (
		<div className="p-1 bg-light rounded-3 m-5 mt-3 pb-5">
			<div className="container-fluid">
				<h1 className="display-5 fw-bold">{props.title}</h1>
				<p className="">{props.text}</p>
				<button className="btn btn-primary btn-lg" type="button">
					{props.button}
				</button>
			</div>
		</div>
	);
};

Jumbotron.propType = {
	title: PropType.string,
	text: PropType.string,
	button: PropType.string,
};

export default Jumbotron;
