import React from 'react';
import Anchor from './anchor';
import Abstract from './abstract';
import { Outline } from './outline';
import Example from './example';

const BodyPage = () => {
	return (
		<div className='body'>
			<Anchor />
			<div>
				<Abstract />
				<Outline />
				<Example />
			</div>
		</div>
	);
};

export default BodyPage;
