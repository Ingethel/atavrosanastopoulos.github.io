import React from 'react';

const Text = ({text}) => <p dangerouslySetInnerHTML={{__html: text}}></p>

export default Text;