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
					background: { paper: '#1a1a1a' },
			  }
			: {
					primary: { main: '#1474F9' },
					secondary: { main: '#FF7F00' },
					background: { paper: '#f5f5f5' },
			  }),
	},
});
