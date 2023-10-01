import React from 'react';
import IconBot from '../../../../assets/icons/IconBot';
import IconAlert from '../../../../assets/icons/IconAlert';
import IconArrow from '../../../../assets/icons/IconArrow';

const Lying = () => {
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
						backgroundImage: `url("images/conversation/lying/Vector-1.png")`,
					}}
				>
					<div
						className='progress'
						style={{
							backgroundImage: `url("images/conversation/lying/progress.png")`,
						}}
					/>
					<p>I would say that I was acting in self-defense and that</p>
					<div
						className='progress'
						style={{
							backgroundImage: `url("images/conversation/lying/progress-2.png")`,
						}}
					/>
					<p>the person who died had attacked me first. I would...</p>
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
						I would say, “I have a lawyer and I will not answer any questions without a
						lawyer.”
					</p>
				</div>
			</div>
		</div>
	);
};

export default Lying;
