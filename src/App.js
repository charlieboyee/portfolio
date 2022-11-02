import { useState, createContext, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getTheme } from './theme';
import Sbar from './Sbar';

export const ColorContext = createContext({ toggleColorMode: () => {} });
const App = () => {
	const [mode, setMode] = useState('dark');

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
			},
		}),
		[]
	);

	const appTheme = useMemo(() => createTheme(getTheme(mode)), [mode]);

	return (
		<ColorContext.Provider value={{ colorMode, mode }}>
			<ThemeProvider theme={appTheme}>
				<Outlet />
				<Sbar />
			</ThemeProvider>
		</ColorContext.Provider>
	);
};

export default App;
