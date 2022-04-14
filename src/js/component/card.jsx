import React from "react";
import PropType from "prop-types";

const Card = (props) => {
	return (
		<div className="card">
			<img src={props.imgUrl} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.text}</p>
				<a href={props.buttonUrl} className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	imgUrl: PropType.string,
	title: PropType.string,
	text: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string,
};

export default Card;
