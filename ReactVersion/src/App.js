import React, { Component } from 'react';
import { isBrowser, isMobile } from "react-device-detect";
import Nav from './NavBar/Nav';
import Background from './Background/Background';
import ProjectsDiv from './Projects/ProjectsDivision';
import HomeDiv from './Home/Home';
import ContactsDiv from './Contacts/Contacts';
import ContactsBar from './Contacts/ContactsBar';
import Scroll from './Components/Scroll';
import './App.css';

export default class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			pageContent: 0,
			pages: [
				() => <HomeDiv/>, 
				() => <ProjectsDiv/>, 
				() => <ContactsDiv/>
			],
			renderSidebar: true,
			contentWidth: 1500,
			contentHeight: window.innerHeight-10,
			maxWidth: window.innerWidth,
			maxHeight: window.innerHeight,
			update: () => this.updateState()
		}
	}

	componentWillMount = () => this.state.update()

	componentDidMount = () => window.addEventListener("resize", this.state.update)

	componentWillUnmount = () => window.removeEventListener("resize", this.state.update)

	updateState = () => {
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

	changeContent = (value) => {
		this.setState({
			pageContent: value
		})
	}

	sidebar = () => {
		if(isBrowser){
			if(this.state.pageContent !== 2){
				return (
					<ContactsBar 
						render={this.state.renderSidebar} 
						sidebar={true}
					/>
				);
			}	
		}
	}

	background = () => {
		if(isBrowser){
			return(
				<Background 
					width={this.state.maxWidth} 
					height={this.state.maxHeight} 
					game={this.state.pageContent === 1 ? 'rects' : 'points'}
				/>
			);
		}
	}

	render = () => {
		if(!isBrowser && !isMobile)
			return(
				<p>Watch me in browser or mobile!!</p>
			);
		return(
			<div className="container" style={{maxWidth: this.state.contentWidth}}>
				<Nav clickFunc={this.changeContent}/>
				{this.sidebar()}
				{this.background()}
				<Scroll height={this.state.contentHeight}>
					{this.state.pages[this.state.pageContent]()}
				</Scroll>
			</div>
		);
	}
}
