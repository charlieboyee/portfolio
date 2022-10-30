import { useState, createContext, useMemo, useRef } from 'react';
import { Button, Paper, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getTheme } from './theme';
import Footer from './Footer';
import Cube from './Cube';
import NavBar from './NavBar';
import TechStack from './TechStack';

import './app.css';

export const ColorContext = createContext({ toggleColorMode: () => {} });
const App = () => {
	const cubeSectionRef = useRef();
	const techStackRef = useRef();
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

	const goToTechStack = () => {
		techStackRef.current.scrollIntoView({ behavior: 'smooth' });
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
							color='primary'
							onClick={goToCube}
						>
							View my work
						</Button>
						<Button
							size='large'
							variant='outlined'
							color='primary'
							onClick={goToTechStack}
						>
							See what I can use
						</Button>
					</section>
					<section className='techStack' ref={techStackRef}>
						<TechStack />
					</section>
					<section className='cubeContainer' ref={cubeSectionRef}>
						<Cube />
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
