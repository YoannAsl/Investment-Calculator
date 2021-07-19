import React, { useState } from 'react';
import styled from 'styled-components';
import intervals from '../intervals';

const Form = styled.form`
	input,
	select {
		margin: 0 10px;
	}
`;

const Inputs = () => {
	const [inputs, setInputs] = useState({
		startingAmount: 0,
		contribution: 0,
		interval: 0,
		return: 0,
		period: 0,
	});

	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		const target = e.currentTarget;
		const { name, value } = target;
		// const value = +target.value;
		setInputs({ ...inputs, [name]: +value });
	};

	console.log(inputs);

	return (
		<Form>
			<label htmlFor='startingAmount'>Starting Amount</label>
			<input
				type='number'
				name='startingAmount'
				onChange={handleChange}
				value={inputs.startingAmount}
			/>

			<label htmlFor='contribution'>Additionnal Contribution</label>
			<input
				type='number'
				name='contribution'
				onChange={handleChange}
				value={inputs.contribution}
			/>
			<select name='interval'>
				{intervals.map((interval) => (
					<option key={interval.value} value={interval.value}>
						{interval.description}
					</option>
				))}
			</select>

			<label htmlFor='return'>Rate of Return</label>
			<input
				type='number'
				name='return'
				onChange={handleChange}
				value={inputs.return}
			/>

			<label htmlFor='period'>Years to Grow</label>
			<input
				type='number'
				name='period'
				onChange={handleChange}
				value={inputs.period}
			/>
		</Form>
	);
};

export default Inputs;
