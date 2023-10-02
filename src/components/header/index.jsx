import React from 'react';
import IconAdobe from '../../assets/icons/IconAdobe';
import IconGithub from '../../assets/icons/IconGithub';

const HeaderPage = () => {
    return (
        <div className="header">
            <h1 className="header__title">Representation Engineering: A Top-Down Approach to AI Transparency</h1>
            <p className="header__member">
                Andy Zou<sup>1</sup>, Zifan Wang<sup>2</sup>, J. Zico Kolter<sup>1,3</sup>, Matt Fredrikson<sup>1</sup>
            </p>
            <p className="header__note">
                <sup>1</sup>Carnegie Mellon University, <sup>2</sup>Center for AI Safety, <sup>3</sup>Bosch Center for
                AI
            </p>
            <div className="header__tool">
                <div className="header__tool--item">
                    <IconAdobe />
                    <span>Paper</span>
                </div>
                <div className="header__tool--item">
                    <IconGithub />
                    <span>Code and Data</span>
                </div>
            </div>
        </div>
    );
};

export default HeaderPage;
