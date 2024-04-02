import { Grid, Typography } from '@mui/material';
import React from 'react';

interface Props {}

export const Home: React.FC<Props> = () => {
	return (
		<Grid container direction={'column'} justifyItems={'center'}>
			<Grid item>
				<Typography variant={'h1'} sx={{ fontFamily: 'Poppins' }}>
					mandel.lt
				</Typography>
			</Grid>
			<Grid item>
				<Typography variant={'caption'} sx={{ fontFamily: 'Poppins' }}>
					Under development.
				</Typography>
			</Grid>
		</Grid>
	);
};
