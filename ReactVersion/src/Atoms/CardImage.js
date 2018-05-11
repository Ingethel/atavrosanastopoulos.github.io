import React from 'react';

const Image = ({imgURL, imgWidth, imgHeight}) => {
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
				src = {process.env.PUBLIC_URL + imgURL}
				alt = {imgURL}
			/>
	);
}

export default Image;