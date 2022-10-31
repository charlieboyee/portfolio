import { useRef } from 'react';
import { Button, Divider, Chip, Typography } from '@mui/material';
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
					<Button variant='contained'>Live Demo</Button>
					<Button variant='contained'>View Github</Button>
				</div>
				<Typography variant='h4'>Photography oriented geocaching!</Typography>
				<Divider flexItem>
					<Chip label='Features'>Features</Chip>
				</Divider>

				<Typography>Upload photos from library</Typography>
				<Typography>
					Challenge yourself and others to take a photos outside of their
					comfort zone
				</Typography>
				<Typography>
					Don't forget to add location to go with the photo(s)
				</Typography>
				<Typography>Go out and explore!</Typography>
				<Divider flexItem>
					<Chip label='Tech Stack'>Tech Stack</Chip>
				</Divider>
				<Typography>React Native w/Expo</Typography>
				<Typography>Node JS</Typography>
				<Typography>Express</Typography>
				<Typography>Postgre SQL</Typography>
				<Typography>Firebase Authentication/Storage</Typography>
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
				</div>
				<Typography
					variant='caption'
					color='grey'
					sx={{ position: 'relative', top: '10%' }}
				>
					Android only*
				</Typography>
			</section>
		</>
	);
};

export default RNProject;
