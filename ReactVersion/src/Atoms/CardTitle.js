import React from 'react';

const Title = ({title}) => {
	let myStyle = {
		fontSize: "1.2rem",
		fontWeight: "bold"
	}
	return (
			<p style = {myStyle}>
				{title}
			</p>
	);
}

export default Title;