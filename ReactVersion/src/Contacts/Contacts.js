import React from 'react';
import ContactsBar from './ContactsBar';

const ContactsDiv = () => {

	return (
		<div 
			className = "homeContainer"
		>
			<p>{`So, let's continue with you now.`}</p>
			<p>{`If you want me to learn about you, then smash those buttons fam!!`}</p>
			<br/>
			<ContactsBar/>
		</div>
	);
	
}

export default ContactsDiv;