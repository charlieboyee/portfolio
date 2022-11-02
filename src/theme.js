export const getTheme = (mode) => ({
	components: {
		MuiPaper: {
			defaultProps: {
				square: true,
			},
		},
		MuiCard: {
			defaultProps: {
				square: false,
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none',
				},
			},
		},
	},
	palette: {
		mode,
		...(mode === 'dark'
			? {
					primary: { main: '#FF0000' },
					secondary: { main: '#1474F9' },
					text: { primary: '#ffffff' },
					common: { black: '#000000', white: '#f5f5f5' },
					background: { paper: '#1a1a1a' },
			  }
			: {
					primary: { main: '#1474F9' },
					// secondary: { main: '#FF7F00' },
					text: { primary: '#000000' },
					common: { black: '#000000', white: '#f5f5f5' },
					background: { paper: '#CFE2D3' },
			  }),
	},
});
