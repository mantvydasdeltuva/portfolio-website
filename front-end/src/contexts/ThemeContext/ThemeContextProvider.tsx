import React, { createContext, useEffect, useMemo, useState } from 'react';
import { PaletteMode, ThemeProvider, createTheme } from '@mui/material';
import { COLOR } from '../../types/enum';

interface ThemeContextProps {
	mode: string;
	update: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
	mode: 'dark',
	update: () => {},
});

interface Props {
	children?: React.ReactNode;
}

export const ThemeContextProvider: React.FC<Props> = ({ children }) => {
	const [mode, setMode] = useState<string>(localStorage.getItem('color-mode') || 'dark');

	const update = () => {
		if (localStorage.getItem('color-mode') === 'light') {
			localStorage.setItem('color-mode', 'dark');
		} else {
			localStorage.setItem('color-mode', 'light');
		}
		setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
	};

	useEffect(() => {
		if (!localStorage.getItem('color-mode')) {
			const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)');
			const systemMode = isSystemDark.matches ? 'dark' : 'light';
			localStorage.setItem('color-mode', systemMode);
			setMode(systemMode);
		}
	}, []);

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: mode as PaletteMode,
					text: {
						primary: mode === 'dark' ? COLOR.white : COLOR.black,
						secondary: COLOR.gray,
					},
					background: {
						default: mode === 'dark' ? COLOR.black : COLOR.white,
					},
				},
				typography: {
					fontFamily: 'Poppins',
					fontSize: 20,
					h1: {
						fontSize: '10rem', // xl
						'@media (max-width: 1535px)': {
							fontSize: '8rem',
						}, // lg
						'@media (max-width: 1199px)': {
							fontSize: '6rem',
						}, // md
						'@media (max-width: 899px)': {
							fontSize: '4rem',
						}, // sm
						'@media (max-width: 599px)': {
							fontSize: '2rem',
						}, // sx
					},
					body1: {
						fontSize: '1rem', // xl
						'@media (max-width: 1535px)': {
							fontSize: '0.9rem',
						}, // lg
						'@media (max-width: 1199px)': {
							fontSize: '0.8rem',
						}, // md
						'@media (max-width: 899px)': {
							fontSize: '0.7rem',
						}, // sm
						'@media (max-width: 599px)': {
							fontSize: '0.6rem',
						}, // sx
					},
				},
			}),
		[mode]
	);

	const ThemeContextValue: ThemeContextProps = {
		mode,
		update,
	};

	return (
		<ThemeContext.Provider value={ThemeContextValue}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ThemeContext.Provider>
	);
};
