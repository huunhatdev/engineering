import React from 'react';
import RowButton from './RowButton';
import Slick from './Slick';
import Control from './control';

const Example = () => {
	return (
		<div>
			<div id='example' className='section example'>
				<h2 className='section__title'>Example</h2>
				<RowButton />
				<Slick />
				<Control />
			</div>
		</div>
	);
};

export default Example;
