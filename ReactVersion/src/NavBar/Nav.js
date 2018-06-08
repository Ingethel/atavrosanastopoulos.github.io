import React from 'react';
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import './Nav.css';

const Nav = ({clickFunc}) => {

	const bar = () => {
		return(
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
		);
	}

	return (
		<div>
			<BrowserView viewClassName="mynavbarBrowser" device={isBrowser}>
				{bar()}
			</BrowserView>
			<MobileView viewClassName="mynavbarMobile" device={isMobile}>
				{bar()}
			</MobileView>
		</div>
	);
}

export default Nav;