import { useRef } from 'react';
import { Button, Typography } from '@mui/material';
import './RNProject.css';
import RNativeVid from '../assets/RNativeProject.mp4';

const RNProject = () => {
	const vidRef = useRef(null);

	const playVid = () => {
		console.log('play');
		const myVid = vidRef.current;

		if (myVid.paused) {
			myVid.play();
		}
	};

	const pauseVid = () => {
		const myVid = vidRef.current;

		if (!myVid.paused) {
			myVid.pause();
		}
	};

	return (
		<>
			<section className='left'>
				<Typography id='title' variant='h1'>
					Photo Cacher
				</Typography>
				<div className='buttonsContainer'>
					<Button variant='outlined'>Live Demo</Button>
					<Button variant='outlined'>View Github</Button>
				</div>
			</section>

			<section className='right'>
				<div className='phone'>
					<div className='panel front'>
						<Typography color='common.white'>Photo Cacher</Typography>
						<div className='vidControls'>
							<Button color='success' onClick={playVid}>
								Play
							</Button>
							<Button color='warning' onClick={pauseVid}>
								Pause
							</Button>
						</div>
						<video ref={vidRef} autoPlay muted>
							<source src={RNativeVid} type='video/mp4' />
						</video>
					</div>
					<div className='panel back'></div>
				</div>
			</section>
		</>
	);
};

export default RNProject;
