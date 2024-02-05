import React from "react";
import { TeamContainer } from "./TeamContainer";

//create your first component
const Home = () => {
	return (
		<div className="d-flex flex-column w-100">
			<h1 className="display-1 text-white text-center mt-4 mb-5">
				Welcome
			</h1>
			<div className="d-flex justify-content-center">
				<TeamContainer mode="home" />
				<TeamContainer mode="away" /> 
			</div>
		</div>
	);
};

export default Home;
