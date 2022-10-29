import { useState, createContext, useMemo, useRef } from 'react';
import { Button, Paper, Typography } from '@mui/material';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { getTheme } from './theme';
import Cube from './Cube';
import './app.css';

const ColorContext = createContext();
const App = () => {
	const cubeSectionRef = useRef();

	const [mode, setMode] = useState('dark');

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
				</Paper>
			</ThemeProvider>
		</ColorContext.Provider>
	);
};

export default App;
