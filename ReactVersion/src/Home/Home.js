import React, {Component} from 'react';
import { isBrowser } from "react-device-detect";
import './Home.css';

export default class HomeDiv extends Component {

	constructor(props){
		super(props);
		this.state = {
			display: true,
		}
	}

	onClick = (event) => {
		this.setState({
			display: !this.state.display
		})
	}

	hideButton = () => {
		if(isBrowser){
			return(
				<div>
					<br/>
					<p>{`Speaking of games, do you want to play one?`}</p>
					<a onClick = {this.onClick}>{`Hide the content and lets start drawing!!!`}</a>
				</div>
			);
		}
	}

	render = () => {
		return (
			<div 
				id = "homeContainer"
				className = "homeContainer"
				style={{height: this.state.display ? "auto" : "0px"}}
			>
				<p className="title">{`Hello World!!!`}</p>
				<hr/>
				<p>{`Welcome to my website. Lets get to know each other.`}</p>
				<p>{`Let's start with me, shall we?`}</p>
				<br/>
				<p>{`I am developer interested in Computer Vision, Computer Games and Machine Learning`}</p>
				<p>{`If you navigate carefully, you can have a look at my work. Some are through a group effort, but mostly solo projects.`}</p>
				<p>{`My favorites include ray tracing visualisations and mini games with procedural content generation.`}</p>
				{this.hideButton()}
			</div>
		);
	}
	
}
