import { useEffect } from 'react';

const Input = ({ value, onChange }) => {
	useEffect(() => {
		console.log(value);
	});

	return <input value={value} onChange={e => onChange(e.target.value)} />;
};

export default Input;
