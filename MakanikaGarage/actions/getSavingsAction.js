import { GET_SAVINGS } from './actionTypes';
import { HOST } from '../utils/utils';

export const getSavingsAction = (token, id) => dispatch => {	
	fetch(`${HOST}`+`/api/v1/savings/${id}/client_savings/`, {
        method: 'GET',
        headers: {
        	'Content-Type': 'application/json',
        },
    })
	.then(res => res.json())
	.then(savings =>
		dispatch({
			type: GET_SAVINGS,
			payload: savings,
		})
	);
};

