import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ButtonToggle from '../../button/ButtonToggle';
import IconArrowButton from '../../../assets/icons/IconArrowButton';

const Slick = () => {
    const refSlick = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const listItem = [
        {
            id: 'hallucination',
            text: 'Hallucination',
            src: 'images/conversation/reading/ultruthful.png',
            sub: 'images/conversation/reading/ultruthful-1.png'
        },
        {
            id: 'lying',
            text: 'Lying with Intent',
            src: 'https://cdn.dribbble.com/users/1967053/screenshots/4524465/giif.gif',
            sub: 'images/conversation/reading/ultruthful-1.png'
        },
        {
            id: 'hallucination',
            text: 'Untruthful Output',
            src: 'https://cdn.dribbble.com/users/1967053/screenshots/4524465/giif.gif',
            sub: 'images/conversation/reading/ultruthful-1.png'
        }
    ];

    const _renderItems = () => {
        return listItem.map((item, index) => {
            const { id, text, src, sub } = item;

            return (
                <div id={id} className="reading">
                    <div className="wrapper__reading">
                        <h3 className="reading__title">{text}</h3>
                        <img className="image-primary" src={src} alt={text} />
                        <SubImage src={sub} text={text} />
                    </div>
                </div>
            );
        });
    };

    return (
        <div className="wrapper-slick">
            <div className="btn-slick prev" onClick={() => refSlick.current.slickPrev()}>
                <IconArrowButton isPrev />
            </div>
            <Slider ref={refSlick} {...settings} arrows={false}>
                {_renderItems()}
            </Slider>
            <div className="btn-slick next" onClick={() => refSlick.current.slickNext()}>
                <IconArrowButton />
            </div>
        </div>
    );
};

export default Slick;

const SubImage = ({ src, text }) => {
    const refToggle = useRef(null);
    const [visible, setVisible] = useState(false);

    const _handleClick = (e) => {
        setVisible(e);
    };

    return (
        <div className={`wrapper__toggle ${visible ? 'active' : ''} `}>
            <ButtonToggle ref={refToggle} className="reading__toggle" onClick={_handleClick} />
            <img className="image-sub " src={src} alt={text} />
        </div>
    );
};
