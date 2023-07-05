import { Box, ListItem, ListItemText } from '@mui/material';
import { Link, useMatch } from 'react-router-dom';

const NavbarItem = ({ path, label }) => {
	const match = useMatch(path);
	console.log(match);

	return (
		<Box width="fit-content">
			<ListItem component={Link} to={path}>
				<ListItemText
					primary={label}
					primaryTypographyProps={{
						sx: {
							color: 'white',
							fontSize: match ? '16px' : '14px',
							textAlign: 'center',
						},
					}}
				/>
			</ListItem>
		</Box>
	);
};

export default NavbarItem;
