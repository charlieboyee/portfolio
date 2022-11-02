import { useState } from 'react';
import {
	Card,
	CardContent,
	TextField,
	Paper,
	Typography,
	Button,
} from '@mui/material';
import Footer from './Footer';
import NavBar from './NavBar';
import './design/contact.css';

const CustomTextField = (props) => {
	return (
		<TextField
			{...props}
			placeholder={props.placeholder}
			label={props.label}
			value={props.value}
			onChange={props.onChange}
			type={props.type}
			required
			sx={{
				'& label': {
					color: 'grey',
					'&.Mui-focused': {
						color: 'common.black',
					},
				},
				'& .MuiOutlinedInput-root': {
					'& fieldset': {
						borderColor: 'common.black',
					},
					'&:hover fieldset': {
						borderColor: 'common.black',
					},
					'&.Mui-focused fieldset': {
						borderColor: 'common.black',
					},
				},
			}}
			InputProps={{
				sx: {
					color: 'common.black',
				},
			}}
		/>
	);
};

const Contact = () => {
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');
	const [subject, setSubject] = useState('');
	const [email, setEmail] = useState('');

	const clearFields = () => {
		setName('');
		setSubject('');
		setEmail('');
		setMessage('');
	};

	const sendEmail = () => {};
	return (
		<Paper className='contact'>
			<NavBar />
			<main>
				<section className='left'>
					<Typography variant='h1'>Contact</Typography>
					<Card raised sx={{ backgroundColor: 'common.white' }}>
						<CardContent className='textFields'>
							<CustomTextField
								value={name}
								onChange={(e) => setName(e.target.value)}
								label='Name'
								placeholder='Name'
							/>
							<CustomTextField
								value={email}
								type='email'
								onChange={(e) => setEmail(e.target.value)}
								label='Your Email'
								placeholder='example@gmail.com'
							/>
							<CustomTextField
								value={subject}
								onChange={(e) => setSubject(e.target.value)}
								label='Subject'
								placeholder='Subject'
							/>
							<CustomTextField
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								label='Message'
								placeholder='Message'
							/>
						</CardContent>

						<Button onClick={clearFields}>Clear Fields</Button>
						<Button onClick={sendEmail}>Send</Button>
					</Card>
				</section>
				<section className='right'>
					<Typography>
						Feel free to contact me for any business inquiries, potential job
						openings, or issues with this website. As always, thanks for
						visiting my portfolio.
					</Typography>
					<Footer />
				</section>
			</main>
		</Paper>
	);
};

export default Contact;
