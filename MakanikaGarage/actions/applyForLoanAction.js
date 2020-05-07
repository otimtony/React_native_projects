import { APPLY_FOR_LOAN} from './actionTypes';
import { HOST } from '../utils/utils';

export const applyForLoanAction = (getLoanBody, token) => dispatch => {
	fetch(`${HOST}`+`/api/v1/loan/`, {
		method: 'POST', 
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'Authorization': 'Bearer ' + token
		},
		body: JSON.stringify(getLoanBody),
	})
	.then((response) => response.json())
	.then(data => 
		console.log("<<<<<<<<<<<<........ddddaaattttaaaa.......>>>>>>>>>>>>>", data)
	)
	.catch((error) => {
		console.error('Error:', error);
	});

};