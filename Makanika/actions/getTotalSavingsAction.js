import { GET_TOTAL_SAVINGS } from './actionTypes';
import { HOST } from '../utils/utils';

export const getTotalSavingsAction = (token, id) => dispatch => {	
	fetch(`${HOST}`+`/api/v1/savings/${id}/client_total/`, {
        method: 'GET',
        headers: {
        	'Content-Type': 'application/json',
        },
    })
	.then(res => res.json())
	.then(total =>
		dispatch({
			type: GET_TOTAL_SAVINGS,
			payload: total,
		})
	);
};
