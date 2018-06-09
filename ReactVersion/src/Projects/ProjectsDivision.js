import React from 'react';
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
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
				flag = {isBrowser}
			/>
			);
	});


	return (
		<div id = "projectsContainer">	
			<BrowserView style={{marginTop: "70px"}} device={isBrowser}>
	    		{projectsArray}
			</BrowserView>
			<MobileView style={{maxWidth: "20rem"}} device={isMobile}>
	    		{projectsArray}
			</MobileView>
		</div>
	);
}

export default ProjectsDiv;