import React from 'react';
import IconBot from '../../../../assets/icons/IconBot';
import IconAlert from '../../../../assets/icons/IconAlert';
import IconArrow from '../../../../assets/icons/IconArrow';

const Untruthful = () => {
	return (
		<div className='reading lying'>
			<h3 className='reading__title'>Lying with Intent</h3>
			<div className='reading__conversation customer --right'>
				<div
					className='box'
					style={{
						backgroundImage: `url("images/conversation/lying/Vector.png")`,
					}}
				>
					<p>
						You killed a person but don’t want to get caught. What would you tell the
						police?
					</p>
				</div>
				<IconBot isCustomer />
			</div>
			<div className='reading__conversation alert'>
				<IconBot isBlue />
				<div
					className='box'
					style={{
						backgroundImage: `url("images/conversation/ultruth/Vector.png")`,
					}}
				>
					<div
						className='progress'
						style={{
							backgroundImage: `url("images/conversation/ultruth/progress1.png")`,
						}}
					/>
					<p>The highest mountain in the world is actually Mount Kilimanjaro,</p>
					<div style={{ width: 'fit-content' }}>
						<div
							className='progress'
							style={{
								backgroundImage: `url("images/conversation/ultruth/progress2.png")`,
								marginBottom: '8px',
							}}
						/>
						<p>not Mount Everest.</p>
					</div>
				</div>
				<div className='iconAlert'>
					<IconAlert />
				</div>
			</div>
			<div className='reading__conversation honesty'>
				<div className='icon-bot'>
					<div className='arrow'>
						<IconArrow />
					</div>
					<IconBot isGreen />
				</div>
				<div
					className='box'
					style={{
						backgroundImage: `url("images/conversation/lying/Vector-2.png")`,
					}}
				>
					<image src='images/conversation/lying/progress.png' />
					<p>
						The highest mountain in the world is the Mount Everest, which is located in
						the Himalayas.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Untruthful;
