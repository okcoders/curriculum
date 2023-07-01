import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ContactDetail = () => {
	const { contactId } = useParams();

	useEffect(() => {
		console.log('fetch the user data for the id: ', contactId);
	}, []);

	return <Box>You're on the contact detail page</Box>;
};

export default ContactDetail;
