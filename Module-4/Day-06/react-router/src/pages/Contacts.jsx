import { Card, CardContent, CardHeader, Stack, CardActionArea, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

const contacts = [
	{
		id: '1',
		name: 'Brayden Robbins',
	},
	{
		id: '2',
		name: 'Zach Mays',
	},
	{
		id: '3',
		name: 'Emily Harden',
	},
];

const Contacts = () => {
	return (
		<Container>
			<Nav />
			<Stack>
				{contacts.map(({ name, id }) => (
					<Card sx={{ mb: 10 }} key={id}>
						<CardHeader title="Header" />
						<CardContent>{name}</CardContent>
						<CardActionArea>
							<Link to={id}>View Details</Link>
						</CardActionArea>
					</Card>
				))}
			</Stack>
		</Container>
	);
};

export default Contacts;
