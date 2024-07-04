import React from "react";
import NavBar from "./navbar";
import Jumbotron from "./jumbotron";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./card";
import Footer from "./footer";


//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<NavBar />
			<div className="container">
				<Jumbotron />
				<div className="row d-flex justify-content-between">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
