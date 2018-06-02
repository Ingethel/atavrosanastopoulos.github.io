import React from 'react';

const Scroll = (props) => {

	
	const style = () => {
		return{
			overflowY: 'scroll',
			width: '100%',
			height: 'auto',
			maxHeight: props.height,
		}
	}

	return (
    	<div style={style()}>
    		{props.children}
    	</div>
  	);
  
}

export default Scroll;