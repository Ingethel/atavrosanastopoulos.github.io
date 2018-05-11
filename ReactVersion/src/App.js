import React from 'react';
import Nav from './NavBar/Nav';
import ProjectsDiv from './Projects/ProjectsDivision';
import Scroll from './Components/Scroll'
import './App.css';

const App = () => {
	return (
		<div>
			<Nav/>
			<Scroll>
				<ProjectsDiv/>
			</Scroll>
		</div>
	);
}

export default App;