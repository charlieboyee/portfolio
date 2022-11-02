import { Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './design/notFound.css';
const NotFound = () => {
	const [seconds, setSeconds] = useState(5);
	const navigate = useNavigate();

	useEffect(() => {
		if (seconds === 0) {
			navigate(-1, { replace: true });
			return;
		}
		const timer = setTimeout(() => {
			setSeconds((prevState) => prevState - 1);
		}, 1000);
		return () => clearTimeout(timer);
	}, [seconds]);

	return (
		<Paper color='primary.main' className='notFound'>
			<Typography variant='h1'>
				Page not found! Taking you back to the previous page in
			</Typography>
			<Typography variant='h1'> {seconds}</Typography>
		</Paper>
	);
};

export default NotFound;
