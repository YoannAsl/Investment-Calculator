import React, { useState } from 'react';
import '../App.css';
import Inputs from './Inputs';
import intervals from '../intervals';

function App() {
	const [startingAmount, setStartingAmount] = useState(0);
	const [recurringAmount, setRecurringAmount] = useState(0);
	const [interval, setInterval] = useState('');
	const [growthRate, setGrowthRate] = useState(0);
	const [yearsToGrow, setYearsToGrow] = useState(0);

	return (
		<div className='App'>
			App
			<Inputs />
		</div>
	);
}

export default App;
