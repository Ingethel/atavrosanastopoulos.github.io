import React from 'react';
import database from '../Data/Database';
import ProjectClass from '../Components/ProjectClass'
import './style_projects.css';

const ProjectsDiv = () => {

	const projectsArray = database.map((user, i) => {
		return (
			<ProjectClass
				key = {i}
				projectClass = {user}
				index = {i}
				flag = {true}
			/>
			);
	});
	
	return (
		<div 
		style={{marginTop: "70px"}}
		id = "projectsContainer">
				{projectsArray}
		</div>
	);
}

export default ProjectsDiv;