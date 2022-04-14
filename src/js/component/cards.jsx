import React from "react";
import PropType from "prop-types";
import Card from "./card.jsx";

const Cards = (props) => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-3">
					<Card
						imgUrl="https://picsum.photos/seed/picsum/200/300"
						title="Titulo de prueba"
						text="Texto de prueba"
						buttonUrl="https://google.com"
						buttonLabel="Boton de prueba"
					/>
				</div>
				<div className="col-md-3">
					<Card
						imgUrl="https://picsum.photos/seed/picsum/200/300"
						title="Titulo de prueba"
						text="Texto de prueba"
						buttonUrl="https://google.com"
						buttonLabel="Boton de prueba"
					/>
				</div>
				<div className="col-md-3">
					<Card
						imgUrl="https://picsum.photos/seed/picsum/200/300"
						title="Titulo de prueba"
						text="Texto de prueba"
						buttonUrl="https://google.com"
						buttonLabel="Boton de prueba"
					/>
				</div>
				<div className="col-md-3">
					<Card
						imgUrl="https://picsum.photos/seed/picsum/200/300"
						title="Titulo de prueba"
						text="Texto de prueba"
						buttonUrl="https://google.com"
						buttonLabel="Boton de prueba"
					/>
				</div>
			</div>
		</div>
	);
};

export default Cards;
