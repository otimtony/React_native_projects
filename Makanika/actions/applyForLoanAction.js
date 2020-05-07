import { APPLY_FOR_LOAN } from './actionTypes';
import { HOST } from '../utils/utils';

export const applyForLoanAction = (loanBody, token, id) => dispatch => {
	fetch(`${HOST}/api/v1/loan/`, {
		method: 'POST', 
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(loanBody),
	})
	.then((response) => response.json())
	.then(data => 
	console.log("<<<<<<<<<<....... get loan updating .....>>>>>>>>>>", data)
	)
	.catch((error) => {
	console.error('Error:', error);
	});
};