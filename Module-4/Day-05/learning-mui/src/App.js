import { useState } from 'react';
import './App.css';
import {
	Button,
	TextField,
	Box,
	IconButton,
	Grid,
	Container,
	createTheme,
	ThemeProvider,
	Stack,
} from '@mui/material';
import { Delete, HomeOutlined } from '@mui/icons-material';

const theme = createTheme({
	palette: {
		primary: {
			dark: '#101363',
			main: '#353f98',
			light: '#979cca',
		},
	},
	spacing: 4,
	components: {
		MuiButton: {
			defaultProps: {
				disableRipple: true,
			},
		},
	},
});

function App() {
	const [inputState, setInputState] = useState('');
	const doSomething = () => {
		console.log('I am clicked');
	};

	return (
		<ThemeProvider theme={theme}>
			<Container>
				<Stack bgcolor="yellow">
					<Button
						onClick={doSomething}
						variant="outlined"
						color="info"
						endIcon={<HomeOutlined />}
					>
						My Button
					</Button>
					<TextField
						label="My Input"
						value={inputState}
						sx={theme => {
							console.log(theme);
							return {
								boxShadow: theme.shadows[17],
							};
						}}
						onChange={e => setInputState(e.target.value)}
					/>
					<IconButton>
						<Delete />
					</IconButton>
				</Stack>
				<Stack bgcolor="primary.main" mt={3} spacing={2}>
					<Box height={20} bgcolor="yellow">
						Item 1
					</Box>
					<Box height={20} bgcolor="yellow">
						Item 2
					</Box>
					<Box height={20} bgcolor="yellow">
						Item 3
					</Box>
					<Box height={20} bgcolor="yellow">
						Item 4
					</Box>
				</Stack>
				<Grid container spacing={{ xs: 2, md: 3 }}>
					<Grid item xs={12} sm={6}>
						<TextField
							fullWidth
							label="First Name"
							value={inputState}
							onChange={e => setInputState(e.target.value)}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							fullWidth
							label="Last Name"
							value={inputState}
							onChange={e => setInputState(e.target.value)}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							fullWidth
							label="Email"
							type="email"
							value={inputState}
							onChange={e => setInputState(e.target.value)}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							fullWidth
							label="Phone"
							value={inputState}
							onChange={e => setInputState(e.target.value)}
						/>
					</Grid>

					<Grid item xs={12}>
						<TextField
							fullWidth
							label="Textarea"
							value={inputState}
							multiline
							rows={4}
							onChange={e => setInputState(e.target.value)}
						/>
					</Grid>
				</Grid>
			</Container>
		</ThemeProvider>
	);
}

export default App;
