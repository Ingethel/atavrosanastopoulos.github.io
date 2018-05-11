import React from 'react';

const Tags = ({tags}) => {
	let myStyle = {
		fontSize: "0.8rem",
		color: "rgb(100, 100, 100)"
	}
	return (
			<p
				style = {myStyle}
			>
			{`Tags: ${tags}`}
			</p>
	);
}

export default Tags;