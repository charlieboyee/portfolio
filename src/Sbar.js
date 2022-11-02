import { useContext } from 'react';
import { Button, Snackbar } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import './design/sbar.css';
import { ColorContext } from './App';
const Sbar = () => {
	const navigate = useNavigate();
	const { mode } = useContext(ColorContext);

	return (
		<Snackbar
			id='snackBar'
			message='Looking for jobs, open to offers!'
			open={true}
			anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
			action={
				<Button onClick={() => navigate('/contact')} variant='string'>
					Contact now!
				</Button>
			}
			sx={{
				'& .MuiSnackbarContent-root':
					mode === 'dark'
						? { backgroundColor: 'green' }
						: { backgroundColor: 'secondary.dark' },
			}}
		/>
	);
};

export default Sbar;
