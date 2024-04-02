import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../types/enum';
import { Home } from '../../pages/index.ts';

interface Props {}

const App: React.FC<Props> = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={AppRoute.HOME} element={<Home />} />
				<Route path='*' element={<Navigate to={AppRoute.HOME} replace />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
