import React, { useState } from 'react';
import IconControl from '../../../../assets/icons/IconControl';
import Slider from 'react-slick';

const Control = () => {
    const list = [
        {
            id: 'power',
            text: 'Morality Power',
            icon: <IconControl isPower />,
            src: 'images/conversation/control/power.png'
        },
        {
            id: 'emotion',
            text: 'Emotion',
            icon: <IconControl isEmotion />,
            src: 'images/conversation/control/emotion1.png'
        },
        {
            id: 'harmless',
            text: 'Harmlessness',
            icon: <IconControl isHamless />,
            src: 'images/conversation/control/harmless.png'
        },
        {
            id: 'fairless',
            text: 'Fairness',
            icon: <IconControl isFairness />,
            src: 'images/conversation/control/fairness.png'
        },
        {
            id: 'editing',
            text: 'Fact Editing',
            icon: <IconControl isEditing />,
            src: 'images/conversation/control/editing.png'
        },
        {
            id: 'memory',
            text: 'Memorization',
            icon: <IconControl />,
            src: 'images/conversation/control/memorization.png'
        }
    ];

    const settings = {
        dots: false,
        centerMode: true,
        infinite: true,
        centerPadding: '12px',
        speed: 500,
        variableWidth: true
    };

    const [value, setValue] = useState(list[0]);

    const _renderItem = () => {
        return list.map((item) => {
            const { id, text, icon } = item;
            return (
                <div>
                    <div
                        id={id}
                        className={`item ${value.id === id ? 'active' : ''}`}
                        onClick={() => _handleClick(item)}
                    >
                        <p>{text}</p>
                        <div className="icon">{icon}</div>
                    </div>
                </div>
            );
        });
    };

    const _renderSlick = () => {
        return (
            <Slider {...settings} className="box-item-control box-slider">
                {_renderItem()}
            </Slider>
        );
    };

    const _handleClick = (item) => {
        setValue(item);
    };

    return (
        <div className="control">
            <div className="control__items box-item-control">{_renderItem()}</div>
            {_renderSlick()}
            <div className="image_conversation">
                <img src={value.src} alt={value.text} />
            </div>
        </div>
    );
};

export default Control;
