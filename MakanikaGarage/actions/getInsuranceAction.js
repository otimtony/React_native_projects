import { GET_INSURANCE } from './actionTypes';
import { HOST } from '../utils/utils';

export const getInsuranceAction = (token, id) => dispatch => {	
	fetch(`${HOST}`+`/api/v1/insurance/${id}/`, {
        method: 'GET',
        headers: {
        	'Content-Type': 'application/json',
        	'Authorization': 'Bearer ' + token
        },
    })
	.then(res => res.json())
	.then(insurance =>
		dispatch({
			type: GET_INSURANCE,
			payload: insurance,
		})
	);
};