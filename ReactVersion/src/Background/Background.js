import React, {Component} from 'react';
import MyCanvas from './Canvas';

export default class Background extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			points: []
		}
	}

	style(){
		return{
			position: "fixed",
			top: "0",
			left: "0",
			right: "0",
			bottom: "0",
			zIndex: "-1"
		}
	}

	onClick = (event) => {
		let points = this.state.points;
		points.push([event.clientX, event.clientY]);
		this.setState(points);
		console.log("bck: ", points)
	}

	render(){
		return(
			<div
				style = {this.style()} 
				onClick = {this.onClick}
			>
				<MyCanvas 
					width = {window.innerWidth} 
					height = {window.innerHeight} 
					points = {this.state.points}
				/>
			</div>
		);
	}

}