import { ListItem, ListItemText } from '@mui/material';
import { Link, useMatch } from 'react-router-dom';

const NavItem = ({ path, label }) => {
	const match = useMatch(path);

	return (
		<ListItem component={Link} to={path}>
			<ListItemText primary={label} sx={{ color: match ? 'red' : 'unset' }} />
		</ListItem>
	);
};

export default NavItem;
