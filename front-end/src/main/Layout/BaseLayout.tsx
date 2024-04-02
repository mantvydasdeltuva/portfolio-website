import { Box, Container, IconButton, useTheme } from '@mui/material';
import { useLanguageContext, useThemeContext } from '../../contexts';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import PublicIcon from '@mui/icons-material/Public';

interface Props {
	children?: React.ReactNode;
}

const BaseLayout: React.FC<Props> = (props) => {
	const theme = useTheme();

	const themeContext = useThemeContext();
	const languageContext = useLanguageContext();

	return (
		<Box
			minHeight={'100vh'}
			sx={{
				display: 'flex',
				justifyItems: 'center',
				alignItems: 'center',
				backgroundColor: theme.palette.background.default,
			}}
		>
			<Container>{props.children}</Container>

			<Box position='absolute' bottom={0} left={0} mb={1} ml={1}>
				<IconButton onClick={themeContext.update}>
					{themeContext.mode === 'light' ? (
						<DarkModeIcon
							sx={{ color: theme.palette.text.secondary, fontSize: { xs: 20, sm: 25, md: 30, lg: 35, xl: 40 } }}
						/>
					) : (
						<LightModeIcon
							sx={{ color: theme.palette.text.secondary, fontSize: { xs: 20, sm: 25, md: 30, lg: 35, xl: 40 } }}
						/>
					)}
				</IconButton>
			</Box>

			<Box position='absolute' bottom={0} right={0} mb={1} mr={1}>
				<IconButton onClick={languageContext.update}>
					<PublicIcon
						sx={{ color: theme.palette.text.secondary, fontSize: { xs: 20, sm: 25, md: 30, lg: 35, xl: 40 } }}
					/>
				</IconButton>
			</Box>
		</Box>
	);
};

export default BaseLayout;
