import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import JSsvg from './assets/javascript.svg';
import REACTsvg from './assets/react.svg';
import POSTGREsvg from './assets/postgresql.svg';
import NODEsvg from './assets/nodejs.svg';
import PYTHONsvg from './assets/python.svg';
import RNATIVEpng from './assets/react-native.png';
import './techStack.css';

const TechStack = () => {
	const [bounceUp, setBounceUp] = useState('');
	const [bounceDown, setBounceDown] = useState('');

	const handleMouseEnter = (e) => {
		let hexContainer = e.currentTarget;

		hexContainer.style.transform = `scale(${1.5}) rotateY(${'180deg'})`;
		hexContainer.style.transition = `all 1s ease-in-out`;
		let img = e.target?.childNodes[1];
		let text = e.target?.childNodes[2];

		if (img) {
			img.style.opacity = 0;
			img.style.transition = `all 1s ease-in-out`;

			text.style.opacity = 1;
			text.style.transition = `all 1s ease-in-out`;
		}
	};

	const handleMouseLeave = (e) => {
		let hexContainer = e.currentTarget;
		let img = e.target?.childNodes[1];
		let text = e.target?.childNodes[2];

		if (img) {
			hexContainer.style.transform = `scale(${1}) rotateY(${'0deg'})`;
			text.style.opacity = 0;
			img.style.opacity = 1;
		}
	};

	const handleScroll = () => {
		if (
			window.scrollY > window.innerHeight &&
			window.scrollY < window.innerHeight + 100
		) {
			setBounceUp('bounceUp');
			setBounceDown('bounceDown');
			setTimeout(() => {
				setBounceUp('');
				setBounceDown('');
			}, 2000);
		}
	};
	useEffect(() => {
		const listener = window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', listener);
	}, []);
	return (
		<>
			<div
				className={`hexContainer ${bounceUp}`}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<div className='hexagon' />
				<img src={JSsvg} alt='javascript' />

				{/* Limit to 2 lines */}
				<Typography className='hexText'>My main!</Typography>
			</div>

			<div
				className={`hexContainer ${bounceDown}`}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<div className='hexagon' />
				<img src={REACTsvg} alt='react' />
				<Typography className='hexText'>My main!</Typography>
			</div>

			<div
				className={`hexContainer ${bounceUp}`}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<div className='hexagon' />
				<img src={NODEsvg} alt='nodejs' />
				<Typography className='hexText'>My main!</Typography>
			</div>

			<div
				className={`hexContainer ${bounceDown}`}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<div className='hexagon' />
				<img src={POSTGREsvg} alt='postgresql' />
				<Typography className='hexText'>Postgre SQL</Typography>
			</div>

			<div
				className={`hexContainer ${bounceUp}`}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<div className='hexagon' />
				<img src={RNATIVEpng} alt='reactNative' />
				<Typography className='hexText'>React Native</Typography>
			</div>
			<div
				className={`hexContainer ${bounceDown}`}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<div className='hexagon' />
				<img src={PYTHONsvg} alt='pytyon' />
				<Typography className='hexText comingSoon'>Coming Soon</Typography>
			</div>
		</>
	);
};

export default TechStack;
