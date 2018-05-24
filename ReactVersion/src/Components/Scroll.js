import React from 'react';

const Scroll = (props) => {
	let style = {
		 overflowY: 'scroll', 
		 width: '100%', 
		 height: 'auto',
		 maxHeight: '900px'
	}

  return (
    <div style={style}>
      {props.children}
    </div>
  );
  
};

export default Scroll;