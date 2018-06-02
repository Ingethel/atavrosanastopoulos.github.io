import React, { Component } from 'react';
import Nav from './NavBar/Nav';
import Background from './Background/Background';
import ProjectsDiv from './Projects/ProjectsDivision';
import Scroll from './Components/Scroll';
import Sidebar from './Sidebar/Sidebar';
import './App.css';

export default class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			renderSidebar: true,
			contentWidth: 1500,
			contentHeight: window.innerHeight-10,
			maxWidth: window.innerWidth,
			maxHeight: window.innerHeight,
			update: () => this.updateState()
		}
	}

	componentWillMount(){
		this.state.update();
	}

	componentDidMount(){
		window.addEventListener("resize", this.state.update);
	}

	componentWillUnmount() {
    	window.removeEventListener("resize", this.state.update);
	}

	updateState(){
		this.setState({
			contentHeight: window.innerHeight-10,
			maxWidth: window.innerWidth,
			maxHeight: window.innerHeight
		});

		if( window.innerWidth <= 1500+(1500*0.2) ){
			if ( window.innerWidth <= 775 ){
				this.setState({
					renderSidebar: false,
					contentWidth: window.innerWidth
				})
			} else {
				this.setState({
					renderSidebar: true,
					contentWidth: window.innerWidth * 0.8
				})
			}
		} else {
			this.setState({
				renderSidebar: true,
				contentWidth: 1500
			})
		}
	}

	render(){
		return (
			<div className="container" style={{maxWidth: this.state.contentWidth}}>
				<Nav/>
				<Sidebar render={this.state.renderSidebar}/>
				<Background width={this.state.maxWidth} height={this.state.maxHeight}/>
				<Scroll height={this.state.contentHeight}>
					<ProjectsDiv/>
				</Scroll>
			</div>
		);
	}
}
