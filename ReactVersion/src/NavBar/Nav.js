import React from 'react';
import './Nav.css';

const Nav = ({clickFunc}) => {
	return (
		<div className="mynavbar">
			<ul>
				<li>
					<a onClick = {() => clickFunc(0)}>Home</a>
				</li>
				<li>
					<a onClick = {() => clickFunc(1)}>Projects</a>
				</li>
				<li>
					<a onClick = {() => clickFunc(2)}>Contact</a>
				</li>
				<div className="underbar"></div>
			</ul>
		</div>
	);
}

export default Nav;