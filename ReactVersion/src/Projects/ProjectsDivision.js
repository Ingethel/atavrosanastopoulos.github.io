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
				flag = {i===0}
			/>
			);
	});
	
	return (
		<div className = "accordion" id = "accordionExample">
			<div className = "card transparent" id = "projects">
				{projectsArray}
			</div>
		</div>
	);
}

export default ProjectsDiv;