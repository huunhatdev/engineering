import React, { useState } from 'react';
import IconControl from '../../../../assets/icons/IconControl';
import Slider from 'react-slick';
import IconArrowButton from '../../../../assets/icons/IconArrowButton';

const Control = () => {
    const list = [
        {
            id: 'power',
            text: 'Morality Power',
            icon: <IconControl isPower />,
            src: 'images/conversation/control/power.png',
            svg: 'images/conversation/bot_gif/Morality-Power.png'
        },
        {
            id: 'emotion',
            text: 'Emotion',
            icon: <IconControl isEmotion />,
            src: 'images/conversation/control/emotion1.png',
            sub: 'images/conversation/control/emotion2.png',
            svg: 'images/conversation/bot_gif/Emotion.png'
        },
        {
            id: 'harmless',
            text: 'Harmlessness',
            icon: <IconControl isHamless />,
            src: 'images/conversation/control/harmless.png',
            svg: 'images/conversation/bot_gif/Harmlessness.png'
        },
        {
            id: 'fairless',
            text: 'Fairness',
            icon: <IconControl isFairness />,
            src: 'images/conversation/control/fairness.png',
            svg: 'images/conversation/bot_gif/Fairness.png'
        },
        {
            id: 'editing',
            text: 'Fact Editing',
            icon: <IconControl isEditing />,
            src: 'images/conversation/control/editing.png',
            svg: 'images/conversation/bot_gif/Editing.png'
        },
        {
            id: 'memory',
            text: 'Memorization',
            icon: <IconControl />,
            src: 'images/conversation/control/memorization.png',
            svg: 'images/conversation/bot_gif/Memo.png'
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
    const [isNext, setIsNext] = useState(true);

    const _handleClickNext = () => {
        setIsNext((prev) => !prev);
    };

    const _renderItem = () => {
        return list.map((item) => {
            const { id, text, svg, sub } = item;
            return (
                <div>
                    <div
                        id={id}
                        className={`item ${value.id === id ? 'active' : ''}`}
                        onClick={() => _handleClick(item)}
                    >
                        <p>{text}</p>
                        <img className="icon-svg" src={svg} alt="" />
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
                <img src={!!value.sub && isNext ? value.sub : value.src} alt={value.text} />
                {!!value?.sub && (
                    <div className="btn-prev" onClick={_handleClickNext}>
                        <IconArrowButton isPrev={!isNext} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Control;
