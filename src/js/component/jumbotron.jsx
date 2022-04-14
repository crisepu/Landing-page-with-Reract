import React from "react";
import PropType from "prop-types";

const Jumbotron = (props) => {
	return (
		<div className="p-1 bg-light rounded-3 m-5 mt-3 pb-5">
			<div className="container-fluid">
				<h1 className="display-5 fw-bold">A Warm Welcome!</h1>
				<p className="">
					Using a series of utilities, you can create this jumbotron,
					just like the one in previous versions of Bootstrap. Check
					out the examples below for how you can remix and restyle it
					to your liking.
				</p>
				<button className="btn btn-primary btn-lg" type="button">
					Example button
				</button>
			</div>
		</div>
	);
};

export default Jumbotron;
