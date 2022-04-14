import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Cards from "./cards.jsx";
import Footer from "./footer.jsx";
//create your first component
const Home = () => {
	return (
		<>
			<Navbar
				brand="Bootcamp and React"
				nav1="Explorer"
				nav2="About"
				nav3="Services"
				nav4="Contact"
			/>
			<Jumbotron
				title="Titulo de ejemplo"
				text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus minus, reiciendis nisi corrupti quas officiis ducimus suscipit sequi quo porro, voluptatem ad molestias obcaecati tempora magnam! Rerum eos nisi aliquid!"
				button="Boton de prueba"
			/>
			<Cards />
			<Footer textFooter="Copyright ® Your Website 2019" />
		</>
	);
};

export default Home;
