import React, { Component } from 'react';
import Image from '../Atoms/CardImage';
import contactInfo from '../Data/ContactInfo'
import './Sidebar.css';

export default class Sidebar extends Component {

	constructor(props){
		super(props);
		this.state = {
			render: this.props.width >= 1600,
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
		this.setState({render: window.innerWidth >= 1600});
	}

	onClick = (event) => {
		console.log(event);
	}

	renderContacts(){
		return contactInfo.map((contact, index) => {
			return(
				<a 
					href = {contact.link}
					key = {`logo${index}`}
					className = "sidebarimg">
					<Image 
						imgURL = {contact.image}
						imgWidth = "50px"
					/>
				</a>
			)
		})
	}

	render(){
		return (
			this.state.render ?
			<div className="contactSidebar">
				{this.renderContacts()}
			</div>
			: <div></div>
		);	
	}
	
}