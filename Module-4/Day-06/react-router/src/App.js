import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Contacts from './pages/Contacts';
import ContactDetail from './pages/ContactDetail';
import Menu from './pages/Menu';
import Login from './pages/Login';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Dashboard />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/menu',
		element: <Menu />,
	},
	{
		path: '/contacts',
		children: [
			{
				index: true,
				element: <Contacts />,
			},
			{
				path: ':contactId',
				element: <ContactDetail />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
