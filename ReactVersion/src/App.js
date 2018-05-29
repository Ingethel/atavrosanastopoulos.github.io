import React from 'react';
import Nav from './NavBar/Nav';
import Background from './Background/Background';
import ProjectsDiv from './Projects/ProjectsDivision';
import Scroll from './Components/Scroll';
import Sidebar from './Sidebar/Sidebar';
import './App.css';

const App = () => {

	return (
		<div>
			<Nav/>
			<Sidebar width={window.innerWidth}/>
			<Background/>
			<Scroll height={window.innerHeight}>
				<ProjectsDiv/>
			</Scroll>
		</div>
	);
}

export default App;