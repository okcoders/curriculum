import { useState } from 'react';

const SignInForm = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const handleSubmit = e => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<form
			onSubmit={handleSubmit}
			style={{
				display: 'flex',
				flexDirection: 'column',
				margin: '0 30px',
				alignItems: 'flex-start',
			}}
		>
			<label htmlFor="email" style={{ marginTop: 20 }}>
				Email
			</label>
			<input
				name="email"
				type="email"
				placeholder="email"
				value={formData.email}
				onChange={e => setFormData({ ...formData, email: e.target.value })}
				style={{
					width: '100%',
				}}
			/>
			<label htmlFor="password" style={{ marginTop: 20 }}>
				Password
			</label>
			<input
				type="password"
				placeholder="Password"
				value={formData.password}
				onChange={e => setFormData({ ...formData, password: e.target.value })}
				style={{
					width: '100%',
				}}
			/>
			<button type="submit" style={{ marginTop: 20 }}>
				Sign In
			</button>
		</form>
	);
};

export default SignInForm;
