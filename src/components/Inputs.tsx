import React from 'react';
import intervals from '../intervals';

const Inputs = () => {
	return (
		<form>
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
		</form>
	);
};

export default Inputs;
