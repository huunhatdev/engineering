import React, { useState } from 'react';
import IconControl from '../../../../assets/icons/IconControl';

const Control = () => {
	const list = [
		{
			id: 'power',
			text: 'ssss',
			icon: <IconControl isPower />,
		},
		{
			id: 'emotion',
			text: 'ssss',
			icon: <IconControl isEmotion />,
		},
		{
			id: 'harmless',
			text: 'ssss',
			icon: <IconControl isHamless />,
		},
		{
			id: 'fairless',
			text: 'ssss',
			icon: <IconControl isFairness />,
		},
		{
			id: 'editing',
			text: 'ssss',
			icon: <IconControl isEditing />,
		},
		{
			id: 'memory',
			text: 'ssss',
			icon: <IconControl />,
		},
	];

	const [value, setValue] = useState(list[0]);

	const _renderItem = () => {
		return list.map((item) => {
			const { id, text, icon } = item;
			return (
				<div
					id={id}
					className={`item ${value.id === id ? 'active' : ''}`}
					onClick={() => _handleClick(item)}
				>
					<p>{text}</p>
					<div className='icon'>{icon}</div>
				</div>
			);
		});
	};

	const _handleClick = (item) => {
		setValue(item);
	};

	return (
		<div className='control'>
			<div className='control__items'>{_renderItem()}</div>
		</div>
	);
};

export default Control;
