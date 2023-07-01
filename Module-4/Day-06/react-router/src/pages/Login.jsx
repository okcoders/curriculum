import {
	Box,
	Button,
	Container,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormHelperText,
	Input,
	InputLabel,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const handleSubmit = e => {
		e.preventDefault();
		console.log(formData);
		navigate('/');
	};

	return (
		<Container>
			<Stack component="form" onSubmit={handleSubmit} alignItems="center">
				<Typography variant="h4">Login</Typography>
				<FormControl fullWidth margin="normal">
					<InputLabel htmlFor="email">Email address</InputLabel>
					<Input
						id="email"
						aria-describedby="email-helper-text"
						placeholder="email"
						value={formData.email}
						onChange={e => setFormData({ ...formData, email: e.target.value })}
						fullWidth
					/>
					<FormHelperText id="email-helper-text">
						We'll never share your email.
					</FormHelperText>
				</FormControl>
				<FormControl fullWidth margin="normal">
					<InputLabel htmlFor="password">Password</InputLabel>
					<Input
						id="password"
						aria-describedby="password-helper-text"
						placeholder="password"
						value={formData.password}
						type="password"
						onChange={e => setFormData({ ...formData, password: e.target.value })}
						fullWidth
					/>
				</FormControl>
				<Button type="submit" variant="contained" color="primary" fullWidth>
					Sign In
				</Button>
			</Stack>
		</Container>
	);
};

export default Login;
