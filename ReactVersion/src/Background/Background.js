import React, {Component} from 'react';
import RectDivision from './RectDivision';

export default class Background extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			width: this.props.width,
			height: this.props.height,
			makeForeground: this.props.makeForeground,
			update: () => this.updateDims(),
			points: []
		}
	}

	componentDidMount() {
  		this.state.update();
	}
	
	componentWillReceiveProps(nextProps) {
	    if((this.props.width !== nextProps.width) || (this.props.height !== nextProps.height))
	    {
	        this.state.update();
	    }
	} 

	updateDims(){
		this.setState({
			width: this.props.width,
			height: this.props.height
		})
	}

	style(){
		return{
			position: "fixed",
			top: "0",
			left: "0",
			right: "0",
			bottom: "0",
			zIndex: this.state.makeForeground ? 1 : -1
		}
	}

	onClick = (event) => {
		let points = this.state.points;
		points.push([event.clientX, event.clientY]);
		this.setState(points);
	}

	render(){
		return(
			<div
				style = {this.style()} 
				onClick = {this.onClick}
			>
				<RectDivision
					points = {this.state.points}
					width = {this.state.width} 
					height = {this.state.height}
				/>
			</div>
		);
	}

}