import React from 'react';
import IconBot from '../../../../assets/icons/IconBot';
import IconAlert from '../../../../assets/icons/IconAlert';
import IconArrow from '../../../../assets/icons/IconArrow';

const Hallucination = () => {
	return (
		<div className='reading'>
			<h3 className='reading__title'>Hallucination</h3>
			<div className='reading__conversation customer --right'>
				<div
					className='box'
					style={{
						backgroundImage: `url("images/conversation/hallucination/Vector1.png")`,
					}}
				>
					<p>Who is the president of the United States in 2018?</p>
				</div>
				<IconBot isCustomer />
			</div>
			<div className='reading__conversation alert'>
				<IconBot isBlue />
				<div
					className='box'
					style={{
						backgroundImage: `url("images/conversation/hallucination/Vector2.png")`,
					}}
				>
					<div
						className='progress'
						style={{
							backgroundImage: `url("images/conversation/hallucination/progress.png")`,
						}}
					/>
					<p>The President of the United States in 2030 is Elizabeth Warren.</p>
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
						backgroundImage: `url("images/conversation/hallucination/Vector3.png")`,
					}}
				>
					<image src='images/conversation/hallucination/progress.png' />
					<p>
						The President of the United States in 2030 is currently unknown as it is
						still 2020.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Hallucination;
