import React from 'react';
import IconAnchor from '../../../assets/icons/IconAnchor';

const Anchor = () => {
	return (
		<div className='wrapper__anchor'>
			<div className='anchor'>
				<IconAnchor />
				<div className='anchor__items'>
					<span className='anchor__item active'>Abstract</span>
					<span className='anchor__item'>Outline</span>
					<span className='anchor__item'>Example</span>
				</div>
			</div>
		</div>
	);
};

export default Anchor;
