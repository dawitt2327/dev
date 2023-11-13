import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
const FreelancerPage = () => {
	return (
		<>
			<div className="m-2"></div>
			<Routes>
				{routes.map((route, key) => (
					<Route key={key} path={route.path} element={route.element} />
				))}
			</Routes>
		</>
	);
};

export default FreelancerPage;
