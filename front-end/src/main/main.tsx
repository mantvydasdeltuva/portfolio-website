import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App.tsx';
import { LanguageContextProvider, ThemeContextProvider } from '../contexts';
import BaseLayout from './Layout/BaseLayout.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<LanguageContextProvider>
			<ThemeContextProvider>
				<BaseLayout>
					<App />
				</BaseLayout>
			</ThemeContextProvider>
		</LanguageContextProvider>
	</React.StrictMode>
);
