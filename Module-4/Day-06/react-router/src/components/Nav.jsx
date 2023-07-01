import { List } from '@mui/material';
import NavItem from './NavItem';

const Nav = () => {
	return (
		<List>
			<NavItem label="Contacts" path="/contacts" />
			<NavItem label="Menu" path="/menu" />
		</List>
	);
};

export default Nav;
