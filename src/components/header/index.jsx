import React from 'react';
import IconAdobe from '../../assets/icons/IconAdobe';
import IconGithub from '../../assets/icons/IconGithub';

const HeaderPage = () => {
	return (
		<div className='header'>
			<h1 className='header__title'>
				Representation Engineering: A Top-Down Approach to AI Transparency
			</h1>
			<p className='header__member'>
				Andy Zou1, Zifan Wang2, J. Zico Kolter1,3, Matt Fredrikson1
			</p>
			<p className='header__note'>
				1Carnegie Mellon University, 2Center for AI Safety, 3Bosch Center for AI
			</p>
			<div className='header__tool'>
				<div className='header__tool--item'>
					<IconAdobe />
					<span>Paper</span>
				</div>
				<div className='header__tool--item'>
					<IconGithub />
					<span>Code and Data</span>
				</div>
			</div>
		</div>
	);
};

export default HeaderPage;
