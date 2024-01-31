import { Box, ListItem, Stack } from '@mui/material';

const Footer = () => {
	return (
		<Stack
			justifyContent="space-around"
			alignItems="center"
			direction={{ xs: 'column', md: 'row' }}
			p={{ xs: 1, md: 3 }}
			boxShadow={theme => {
				console.log(theme);
				return theme.shadows[4];
			}}
		>
			<ListItem sx={{ width: 'fit-content' }}>About</ListItem>
			<ListItem sx={{ width: 'fit-content' }}>Contact</ListItem>
			<ListItem sx={{ width: 'fit-content' }}>Issues?</ListItem>
		</Stack>
	);
};

export default Footer;
