import React from 'react';
import intervals from '../intervals';

const Inputs = () => {
	return (
		<form>
			<input type='number' name='' id='' />
			<input type='number' name='' id='' />
			<select name='' id=''>
				{intervals.map((interval) => (
					<option value={interval.value}>
						{interval.description}
					</option>
				))}
			</select>
			<input type='number' name='' id='' />
			<input type='number' name='' id='' />
		</form>
	);
};

export default Inputs;
