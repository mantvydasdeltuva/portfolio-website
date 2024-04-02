import React from 'react';
import { Grid, IconButton, Typography, useTheme } from '@mui/material';
import { useLanguageContext } from '../contexts';
import GitHubIcon from '@mui/icons-material/GitHub';

interface Props {}

export const Home: React.FC<Props> = () => {
	const theme = useTheme();

	const languageContext = useLanguageContext();

	const handleGitHubIcon = () => {
		window.open('https://github.com/mantvydasdeltuva', '_blank');
	};

	return (
		<Grid container direction={'column'} justifyItems={'center'} alignItems={'center'}>
			<Grid item>
				<Typography variant={'h1'} color={theme.palette.text.secondary}>
					mandel.lt
				</Typography>
			</Grid>
			<Grid item>
				<Typography variant={'body1'} color={theme.palette.text.secondary}>
					{languageContext.language === 'en' ? 'Under Development' : 'Puslapis Kuriamas'}
				</Typography>
			</Grid>
			<Grid item>
				<IconButton onClick={handleGitHubIcon}>
					<GitHubIcon
						sx={{ color: theme.palette.text.secondary, fontSize: { xs: 20, sm: 25, md: 30, lg: 35, xl: 40 } }}
					/>
				</IconButton>
			</Grid>
		</Grid>
	);
};
