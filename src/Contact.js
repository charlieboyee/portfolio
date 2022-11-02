import { Paper, Typography } from '@mui/material';
import Footer from './Footer';
import NavBar from './NavBar';
import './design/contact.css';

const Contact = () => {
	return (
		<Paper className='contact'>
			<NavBar />
			<main>
				<section className='left'>
					<Typography variant='h1'>Contact</Typography>
				</section>
				<section className='right'>
					<Footer />
				</section>
			</main>
		</Paper>
	);
};

export default Contact;
