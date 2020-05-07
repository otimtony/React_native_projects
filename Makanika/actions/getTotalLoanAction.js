import { GET_TOTAL_LOAN } from './actionTypes';
import { HOST } from '../utils/utils';

export const getTotalLoanAction = (token, id) => dispatch => {
	fetch(`${HOST}`+`/api/v1/loan/${id}/loan_by_client/`, {
        method: 'GET',
        headers: {
        	'Content-Type': 'application/json',
        },
    })
	.then(res => res.json())
	.then(total =>
		console.log("<<<<<<<<<<<<<<........total.......>>>>>>>>>>>>>>", total)	

		// dispatch({
		// 	type: GET_TOTAL_LOAN,
		// 	payload: total,
		// })
	);
};
