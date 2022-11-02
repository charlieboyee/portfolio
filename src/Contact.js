import { useState } from 'react';
import {
	Card,
	CardContent,
	CardActions,
	Modal,
	TextField,
	Paper,
	Typography,
	Button,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
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
			required={true}
			multiline={props.multiline}
			rows={props.rows}
			maxRows={props.maxRows}
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

const ConfirmationModal = ({ message }) => {
	return (
		<Modal id='emailConfirmationModal' open={Boolean(message)}>
			<Card elevation={24}>
				<CardContent>
					<Typography variant='h3'>{message}</Typography>
					{message?.includes('wrong') ? (
						<ErrorIcon color='error' />
					) : (
						<CheckCircleIcon color='success' />
					)}
				</CardContent>
			</Card>
		</Modal>
	);
};

const Contact = () => {
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');
	const [subject, setSubject] = useState('');
	const [email, setEmail] = useState('');
	const [open, setOpen] = useState('');

	const clearFields = () => {
		setName('');
		setSubject('');
		setEmail('');
		setMessage('');
	};

	const sendEmail = async (e) => {
		e.preventDefault();
		const payload = {
			name,
			message,
			subject,
			email,
		};
		try {
			const result = await fetch(`${process.env.REACT_APP_URL}sendEmail`, {
				method: 'post',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify(payload),
			});
			if (result.status === 200) {
				console.log('email sent');
				setOpen('Email sent!');
				return;
			}

			setOpen('Something went wrong, please try again.');
		} catch (err) {
			console.log(err);
			setOpen('Something went wrong, please try again.');
		} finally {
			setTimeout(() => {
				setOpen('');
			}, 3000);
		}
	};
	return (
		<Paper className='contact'>
			<ConfirmationModal message={open} />
			<NavBar />
			<main>
				<section className='left'>
					<Typography variant='h1'>Contact</Typography>
					<Card elevation={24} raised sx={{ backgroundColor: 'common.white' }}>
						<CardContent
							component='form'
							onSubmit={sendEmail}
							className='textFields'
						>
							<CustomTextField
								value={name}
								onChange={(e) => setName(e.target.value)}
								label='Name/Business Organization'
								placeholder='Name/Business Organization'
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
								multiline
								maxRows={5}
								rows={5}
							/>
							<CardActions>
								<Button variant='contained' type='submit'>
									Send
								</Button>
								<Button variant='contained' onClick={clearFields}>
									Clear Fields
								</Button>
							</CardActions>
						</CardContent>
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
