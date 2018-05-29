import React, {Component} from 'react';

export default class Scroll extends Component {

	constructor(props){
		super(props);
		this.state = {
			height: this.props.height,
			update: () => this.updateState()
		}
	}

	componentDidMount(){
		window.addEventListener("resize", this.state.update);
	}

	componentWillUnmount() {
    	window.removeEventListener("resize", this.state.update);
	}

	updateState(){
		this.setState({height: window.innerHeight});
	}

	style() {
		return{
			overflowY: 'scroll',
			width: '100%',
			height: 'auto',
			maxHeight: this.state.height-10,
		}
	}

	render(){
		return (
	    	<div style={this.style()}>
	    		{this.props.children}
	    	</div>
	  	);
	}
  
}