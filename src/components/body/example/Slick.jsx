import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Hallucination from './reading/Hallucination';
import Lying from './reading/Lying';
import Untruthful from './reading/Untruthful';

const Slick = () => {
	const settings = {
		dots: true,
		infinite: true,
		fade: true,
		speed: 100,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};
	return (
		<div>
			<Slider {...settings}>
				<Hallucination />
				<Lying />
				<Untruthful />
			</Slider>
		</div>
	);
};

export default Slick;

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: 'block', background: 'red' }}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: 'block', background: 'green' }}
			onClick={onClick}
		/>
	);
}
