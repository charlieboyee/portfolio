import { Button, Divider, Chip, Typography } from '@mui/material';
import './nissan.css';

const Nissan = () => {
	return (
		<>
			<section className='left'></section>
			<section className='right'>
				<Typography id='title' variant='h1'>
					Nissan
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
		</>
	);
};

export default Nissan;
