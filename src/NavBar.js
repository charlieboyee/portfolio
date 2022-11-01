import { useState, useContext, useEffect } from 'react';
import { Button, IconButton, Switch, Paper, Typography } from '@mui/material';
import BulbOn from './assets/lightBulbOn.png';
import BulbOff from './assets/lightBulbOff.png';
import './navBar.css';
import { ColorContext } from './App';
const NavBar = () => {
	const { colorMode } = useContext(ColorContext);
	const [checked, setChecked] = useState(false);
	const handleChange = (e) => {
		setChecked(e.target.checked);
	};

	useEffect(() => {
		colorMode.toggleColorMode();
	}, [checked]);
	return (
		<Paper component='nav'>
			<section>
				<Typography>The Portfolio</Typography>
			</section>
			<section>
				<Button variant='contained'>Contact</Button>
				<Button variant='contained'>Projects</Button>
				<Button variant='contained'>Stats</Button>
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
			</section>
		</Paper>
	);
};

export default NavBar;
