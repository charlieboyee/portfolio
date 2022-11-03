import { useRef } from 'react';
import { Button, Divider, Chip, Typography } from '@mui/material';
import '../design/RNProject.css';
import RNativeVid from '../assets/RNativeProject.mp4';

const RNProject = ({ project }) => {
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
					{project.title}
				</Typography>
				<div className='projectLinks'>
					<Button
						variant='contained'
						href={project.links.liveDemo}
						target='_blank'
					>
						Live Demo
					</Button>
					<Button
						variant='contained'
						href={project.links.gitHub}
						target='_blank'
					>
						View Github
					</Button>
				</div>
				<Typography variant='h4'>{project.header}</Typography>
				<Divider flexItem>
					<Chip label='Features' />
				</Divider>
				{project.features.map((text, key) => {
					return <Typography key={key}>{text}</Typography>;
				})}
				<Divider flexItem>
					<Chip label='Tech Stack' />
				</Divider>
				<div className='techUsed'>
					{project.techStack.map((tech, key) => {
						return (
							<Button
								variant='outlined'
								key={key}
								href={tech[Object.keys(tech)[0]]}
								target='_blank'
							>
								{Object.keys(tech)[0]}
							</Button>
						);
					})}
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
						<video ref={vidRef} autoPlay loop muted>
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
