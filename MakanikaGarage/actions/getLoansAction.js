import { GET_LOANS } from './actionTypes';
import { HOST } from '../utils/utils';

export const getLoansAction = (token, id) => dispatch => {	
	fetch(`${HOST}`+`/api/v1/loan/${id}/loan_by_client/`, {
        method: 'GET',
        headers: {
        	'Content-Type': 'application/json',
        	'Authorization': 'Bearer ' + token
        },
    })
	.then(res => res.json())
	.then(loans =>
		dispatch({
			type: GET_LOANS,
			payload: loans,
		})
	);
};