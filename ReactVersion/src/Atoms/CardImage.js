import React from 'react';

const Image = ({imgURL, imgWidth = "auto", imgHeight = "auto"}) => {
	let myStyle = {
		width: imgWidth,
		height: imgHeight,
		paddingBottom: "10px",
		paddingRight: "10px",
		float: "left"
	}
	return (
			<img
				style = {myStyle}
				src = {imgURL}
				alt = {imgURL}
			/>
	);
}

export default Image;