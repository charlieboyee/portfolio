import { Typography } from '@mui/material';
import JSsvg from './assets/javascript.svg';
import REACTsvg from './assets/react.svg';
import POSTGREsvg from './assets/postgresql.svg';
import NODEsvg from './assets/nodejs.svg';
import PYTHONsvg from './assets/python.svg';
import RNATIVEpng from './assets/react-native.png';
import './stats.css';

const Stats = () => {
	const handleMouseEnter = (e) => {
		let hexContainer = e.currentTarget;

		hexContainer.style.transform = `scale(${1.5}) rotateY(${'180deg'})`;
		hexContainer.style.transition = `all 1s ease-in-out`;
		console.log(e.target.childNodes);
		let img = e.target?.childNodes[1];
		let text = e.target?.childNodes[2];

		img.style.opacity = 0;
		img.style.transition = `all 1s ease-in-out`;

		text.style.opacity = 1;
		text.style.transition = `all 1s ease-in-out`;
	};

	const handleMouseLeave = (e) => {
		let hexContainer = e.currentTarget;

		hexContainer.style.transform = `scale(${1}) rotateY(${'0deg'})`;

		let img = e.target?.childNodes[1];
		let text = e.target?.childNodes[2];

		img.style.opacity = 1;
		text.style.opacity = 0;
	};
	return (
		<>
			<div
				className='hexContainer'
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<div className='hexagon' />
				<img src={JSsvg} alt='javascript' />

				{/* Limit to 2 lines */}
				<Typography className='hexText'>My main!</Typography>
			</div>

			<div
				className='hexContainer'
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<div className='hexagon' />
				<img src={REACTsvg} alt='react' />
				<Typography className='hexText'>My main!</Typography>
			</div>

			<div
				className='hexContainer'
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<div className='hexagon' />
				<img src={NODEsvg} alt='nodejs' />
				<Typography className='hexText'>My main!</Typography>
			</div>

			<div
				className='hexContainer'
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<div className='hexagon' />
				<img src={POSTGREsvg} alt='postgresql' />
				<Typography className='hexText'>Postgre SQL</Typography>
			</div>

			<div
				className='hexContainer'
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<div className='hexagon' />
				<img src={RNATIVEpng} alt='reactNative' />
				<Typography className='hexText'>React Native</Typography>
			</div>
			<div
				className='hexContainer'
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

export default Stats;
