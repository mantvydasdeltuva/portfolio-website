import React, { createContext, useEffect, useState } from 'react';

interface LanguageContextProps {
	language: string;
	update: () => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
	language: 'en',
	update: () => {},
});

interface Props {
	children?: React.ReactNode;
}

export const LanguageContextProvider: React.FC<Props> = ({ children }) => {
	const [language, setLanguage] = useState<string>(localStorage.getItem('language') || 'en');

	function update() {
		if (localStorage.getItem('language') === 'en') {
			localStorage.setItem('language', 'lt');
		} else {
			localStorage.setItem('language', 'en');
		}
		setLanguage((prev) => (prev === 'en' ? 'lt' : 'en'));
	}

	useEffect(() => {
		if (!localStorage.getItem('language')) {
			localStorage.setItem('language', 'en');
			setLanguage('en');
		}
	}, []);

	const ThemeContextValue: LanguageContextProps = {
		language,
		update,
	};

	return <LanguageContext.Provider value={ThemeContextValue}>{children}</LanguageContext.Provider>;
};
