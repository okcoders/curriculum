import './App.css';
import Counter from './Counter';
import Input from './Input';
import WindowSizer from './WindowSizer';
import { Posts } from './Posts';
import { useState } from 'react';

function App() {
	const [inputValue, setInputValue] = useState('');

	return (
		<div className="App" style={{ color: 'blue', backgroundColor: 'yellow' }}>
			<Counter />
			<WindowSizer />
			<Input value={inputValue} onChange={setInputValue} />
			<Posts />
		</div>
	);
}

export default App;
