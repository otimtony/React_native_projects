import { GET_LOAN } from './actionTypes';
import { HOST } from '../utils/utils';

export const getLoanAction = (token, id) => dispatch => {
	fetch(`${HOST}`+`/api/v1/loan/${id}/`, {
        method: 'GET',
        headers: {
        	'Content-Type': 'application/json',
        	'Authorization': 'Bearer ' + token
        },
    })
	.then(res => res.json())
	.then(loan =>
		dispatch({
			type: GET_LOAN,
			payload: loan,
		})
	);
};