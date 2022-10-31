import { Button, Typography } from '@mui/material';
import './RNProject.css';
import RNativeVid from '../assets/RNativeProject.mp4';

const RNProject = () => {
	return (
		<>
			<section className='left'>
				<div>hello</div>
			</section>

			<section className='right'>
				<div className='phone'>
					<div className='panel front'>
						<Typography id='title' color='common.white'>
							Project title goes here
						</Typography>

						<video autoplay muted>
							<source src={RNativeVid} type='video/mp4' />
						</video>
						<div className='vidControls'>
							<Button color='success'>Play</Button>
							<Button color='warning'>Pause</Button>
						</div>
					</div>
					<div className='panel back'></div>
				</div>
			</section>
		</>
	);
};

export default RNProject;
