import { useState, createContext, useMemo, useRef } from 'react';
import { Button, Paper, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getTheme } from './theme';
import Footer from './Footer';
import Cube from './Cube';
import NavBar from './NavBar';
import JSsvg from './assets/javascript.svg';
import REACTsvg from './assets/react.svg';
import POSTGRESsvg from './assets/postgresql.svg';
import NODEsvg from './assets/nodejs.svg';
import './app.css';

export const ColorContext = createContext({ toggleColorMode: () => {} });
const App = () => {
	const cubeSectionRef = useRef();

	const [mode, setMode] = useState('light');

	const colorMode = useMemo(
		() => ({
			// The dark mode switch would invoke this method
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
			},
		}),
		[]
	);

	const appTheme = useMemo(() => createTheme(getTheme(mode)), [mode]);

	const goToCube = () => {
		cubeSectionRef.current.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<ColorContext.Provider value={colorMode}>
			<ThemeProvider theme={appTheme}>
				<Paper className='app'>
					<NavBar />
					<section className='intro'>
						<Typography id='outer' variant='h2'>
							Hello, my name is{' '}
							<Typography color='primary' component='span' variant='h2'>
								Charles
							</Typography>
							. &nbsp; I'm a full stack web developer.
						</Typography>

						<Button
							size='large'
							variant='outlined'
							id='viewButton'
							color='primary'
							onClick={goToCube}
						>
							View my work
						</Button>
					</section>
					<section className='cubeContainer' ref={cubeSectionRef}>
						<Cube />
					</section>
					<section className='stats'>
						<div className='hexContainer'>
							<div className='hexagon' />
							<img src={JSsvg} alt='javascript' />
						</div>
						<div className='hexContainer'>
							<div className='hexagon' />
							<img src={REACTsvg} alt='react' />
						</div>
						<div className='hexContainer'>
							<div className='hexagon' />
							<img src={NODEsvg} alt='nodejs' />
						</div>
						<div className='hexContainer'>
							<div className='hexagon' />
							<img src={POSTGRESsvg} alt='postgres' />
						</div>
					</section>
					<section className='onePiece'>
						<Button>Live Demo</Button>
						<Button>Github</Button>
					</section>
					<section className='photoCacher'>
						<Button>Live Demo</Button>
						<Button>Github</Button>
					</section>
					<Footer />
				</Paper>
			</ThemeProvider>
		</ColorContext.Provider>
	);
};

export default App;
