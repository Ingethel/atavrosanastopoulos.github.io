import React from 'react';
import Image from '../Atoms/CardImage';
import contactInfo from '../Data/ContactInfo'
import './ContactsBar.css';

const ContactsBar = ({render=true, sidebar=false}) => {

	const renderContacts = () => {
		return contactInfo.map((contact, index) => {
			return(
				<a 
					href = {contact.link}
					key = {`logo${index}`}
					className = "sidebarimg">
					<Image 
						imgURL = {contact.image}
						imgWidth = "50px"
						imgHeight = "50px"
					/>
				</a>
			)
		})
	}

	return (
		render ?
		<div className={sidebar ? "contactSidebar" : "contactBar"}>
			{renderContacts()}
		</div>
		: <div></div>
	);	
	
}

export default ContactsBar;