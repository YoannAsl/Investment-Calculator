import React from 'react';
import styled from 'styled-components';
import intervals from '../intervals';

const Form = styled.form`
	input,
	select {
		margin: 0 10px;
	}
`;

const Inputs = () => {
	return (
		<Form>
			<label htmlFor='starting-amout'>Starting Amount</label>
			<input type='number' name='starting-amount' />

			<label htmlFor='contribution'>Additionnal Contribution</label>
			<input type='number' name='contribution' />
			<select name='interval'>
				{intervals.map((interval) => (
					<option value={interval.value}>
						{interval.description}
					</option>
				))}
			</select>

			<label htmlFor='return'>Rate of Return</label>
			<input type='number' name='return' />

			<label htmlFor='period'>Years to Grow</label>
			<input type='number' name='period' />
		</Form>
	);
};

export default Inputs;
