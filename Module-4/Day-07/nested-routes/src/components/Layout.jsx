import { Box, Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => (
	<Stack height="100%">
		<Navbar />
		<Box height="100%">
			<Outlet />
		</Box>
		<Footer />
	</Stack>
);

export default Layout;
