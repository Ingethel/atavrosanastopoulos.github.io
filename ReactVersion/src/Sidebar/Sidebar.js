import React from 'react';
import Image from '../Atoms/CardImage';
import contactInfo from '../Data/ContactInfo'
import './Sidebar.css';

const Sidebar = ({render}) => {

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
					/>
				</a>
			)
		})
	}

	return (
		render ?
		<div className="contactSidebar">
			{renderContacts()}
		</div>
		: <div></div>
	);	
	
}

export default Sidebar;