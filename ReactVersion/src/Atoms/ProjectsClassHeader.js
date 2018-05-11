import React from 'react';

const Header = ({ header, index }) => {

	let myStyle = {
		height: "60px",
		paddingLeft: "20px",
		verticalAlign: "middle",
		lineHeight: "60px",
		fontFamily: 'Anton',
		fontSize: "1.2rem",
		color: "#007bff",
		marginBottom: "10px"
	}

	return (
		<div
			className = "box-shadow anim-button"
			style = {myStyle} 
			id = {`heading${index}`}
			>
			<p>{header}</p>
		</div>
	);
}

export default Header;