import { useEffect, useState } from 'react';

const WindowSizer = () => {
	const [width, setWidth] = useState(window.innerWidth);
	// const [counter, setCounter] = useState(0);

	const handleResize = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
	}, []);

	//infinite loop
	// useEffect(() => {
	// 	setCounter(counter + 1);
	// }, [counter]);

	return (
		<>
			<div>Window Width: {width}</div>
			{/* <div>Another Counter: {counter}</div> */}
		</>
	);
};

export default WindowSizer;
