import React from 'react';

const RowButton = () => {
	return (
		<div className='row__button'>
			<Button>Representative Reading</Button>
			<Button active>Representative Control</Button>
		</div>
	);
};

const Button = ({ active = false, children }) => {
	return (
		<div className={`button ${active ? 'active' : ''}`}>
			<p>{children}</p>
		</div>
	);
};

export default RowButton;
