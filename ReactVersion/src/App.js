import React from 'react';
import Nav from './NavBar/Nav';
import Background from './Background/Background';
import ProjectsDiv from './Projects/ProjectsDivision';
import Scroll from './Components/Scroll'
import './App.css';

const App = () => {

	return (
		<div>
			<Nav/>
			<Background/>
			<Scroll>
				<ProjectsDiv/>
			</Scroll>
		</div>
	);
}

export default App;