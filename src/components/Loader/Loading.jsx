import React from "react";
import loaderVid from "../../assets/images/loader.gif";
const Loading = () => {
	return (
		<div
			role="status"
			className="h-screen w-full flex items-center justify-center text-center"
		>
			<img className="w-[150px] sm:w-[400px] text-center" src={loaderVid} />
			<span className="sr-only">Loading</span>
		</div>
	);
};

export default Loading;
