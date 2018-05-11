import React from 'react';
import Card from './ProjectCard'

const Container = ({projectList, index, flag}) => {
	let divStyle = {
		display : "flex",
		flexWrap : "wrap"
	}

	const projectCards = projectList.map((user, index_p) => {
		return (
			<Card 
				key = {index_p}
				project = {user}
				indexClass = {index} 
				indexProject = {index_p}
				flag = {false}
			/>
		);
	});

	return (
		flag ?
		<div 
			className = "box-shadow" 
			id = {`collapse${index}`}
			>
			<div style = {divStyle}>
				{projectCards}
			</div>
		</div>
		: <div></div>
	);
}

export default Container;