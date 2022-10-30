import { useState, useContext, useEffect } from 'react';
import { Button, IconButton, Switch } from '@mui/material';
import BulbOn from './assets/lightBulbOn.png';
import BulbOff from './assets/lightBulbOff.png';
import './navBar.css';
import { ColorContext } from './App';
const NavBar = () => {
	const colorMode = useContext(ColorContext);
	const [checked, setChecked] = useState(false);
	const handleChange = (e) => {
		setChecked(e.target.checked);
	};

	useEffect(() => {
		colorMode.toggleColorMode();
	}, [checked]);
	return (
		<nav component='nav'>
			<Button sx={{ color: 'text.primary' }}>Contact</Button>
			<Button sx={{ color: 'text.primary' }}>Projects</Button>
			<Button sx={{ color: 'text.primary' }}>Stats</Button>
			{checked ? (
				<IconButton onClick={() => setChecked(!checked)} disableRipple>
					<img src={BulbOn} alt='lightBulbOn' />
				</IconButton>
			) : (
				<IconButton onClick={() => setChecked(!checked)} disableRipple>
					<img src={BulbOff} alt='lightBulbOff' />
				</IconButton>
			)}

			<Switch color='secondary' checked={checked} onChange={handleChange} />
		</nav>
	);
};

export default NavBar;
