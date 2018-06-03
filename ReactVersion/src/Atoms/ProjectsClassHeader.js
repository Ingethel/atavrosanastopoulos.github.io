import React from 'react';

const Header = ({ header, index }) => {

	let myStyle = {
		height: "60px",
		paddingLeft: "20px",
		verticalAlign: "middle",
		lineHeight: "60px",
		marginBottom: "10px"
	}

	return (
		<div
			className = "box-shadow anim-button"
			style = {myStyle}
			id = {`heading${index}`}
		>
			<p 
				style = {{
					fontFamily: 'Anton',
					fontSize: "1.2rem",
					color: "#007bff",
				}}
			>{header}</p>
		</div>
	);
}

export default Header;