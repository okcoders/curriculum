import { Navigate } from 'react-router-dom';
import Nav from '../components/Nav';

const loggedIn = true;

const Dashboard = () => {
	if (!loggedIn) {
		return <Navigate to="/login" />;
	}

	return <Nav />;
};

export default Dashboard;
