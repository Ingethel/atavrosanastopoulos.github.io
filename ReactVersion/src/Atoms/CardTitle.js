import React from 'react';

const Title = ({title}) => {
	let myStyle = {
		fontSize: "1.2rem",
		fontFamily: "Anton"
	}
	return (
			<p style = {myStyle}>
				{title}
			</p>
	);
}

export default Title;