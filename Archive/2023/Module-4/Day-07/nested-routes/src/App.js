import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Contact from './pages/Contact';
import Weather from './pages/Weather';
import { CssBaseline } from '@mui/material';

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/contact',
				element: <Contact />,
			},
			{
				path: '/weather',
				element: <Weather />,
			},
		],
	},
	{
		path: '/login',
		element: <div>Login</div>,
	},
]);

function App() {
	return (
		<>
			<CssBaseline />
			<RouterProvider router={router} />
		</>
	);
}

export default App;
