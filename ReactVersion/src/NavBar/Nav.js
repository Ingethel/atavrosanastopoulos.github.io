import React from 'react';
import './Nav.css';

const Nav = () => {
	return (
		<div className="mynavbar">
			<ul>
				<li>
					<a href="#homeContainer">Home</a>
				</li>
				<li>
					<a href="#projectsContainer">Projects</a>
				</li>
				<li>
					<a href="#contactContainer">Contact</a>
				</li>
				<div className="underbar"></div>
			</ul>
		</div>
	);
}

export default Nav;