import { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, IconButton, Switch, Paper, Typography } from '@mui/material';
import BulbOn from './assets/lightBulbOn.png';
import BulbOff from './assets/lightBulbOff.png';
import './design/navBar.css';
import { ColorContext } from './App';
const NavBar = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const { colorMode } = useContext(ColorContext);
	const [checked, setChecked] = useState(false);
	const handleChange = (e) => {
		setChecked(e.target.checked);
		colorMode.toggleColorMode();
	};
	useEffect(() => {
		console.log(location);
	}, []);
	return (
		<Paper component='nav'>
			<section className='left'>
				<Typography onClick={() => navigate('/')}>The Portfolio</Typography>
			</section>
			<section className='right'>
				{location?.pathname === '/' ? (
					<>
						<Button variant='contained' onClick={() => navigate('/about')}>
							About
						</Button>
						<Button variant='contained' onClick={() => navigate('/contact')}>
							Contact
						</Button>
						<Button variant='contained' onClick={() => navigate('/stats')}>
							Stats
						</Button>
					</>
				) : null}

				{checked ? (
					<IconButton
						onClick={() => {
							colorMode.toggleColorMode();
							setChecked(!checked);
						}}
						disableRipple
					>
						<img src={BulbOn} alt='lightBulbOn' />
					</IconButton>
				) : (
					<IconButton
						onClick={() => {
							colorMode.toggleColorMode();
							setChecked(!checked);
						}}
						disableRipple
					>
						<img src={BulbOff} alt='lightBulbOff' />
					</IconButton>
				)}

				<Switch color='secondary' checked={checked} onChange={handleChange} />
			</section>
		</Paper>
	);
};

export default NavBar;
