import { useState } from 'react';

const Counter = () => {
	const [counter, setCounter] = useState(0);

	const increaseCounter = () => {
		setCounter(counter + 1);
	};

	return (
		<>
			<div>Counter: {counter}</div>
			<button onClick={increaseCounter}>Increase Counter</button>
		</>
	);
};

export default Counter;
