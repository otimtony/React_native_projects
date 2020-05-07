import { GET_INSURANCES } from './actionTypes';
import { HOST } from '../utils/utils';

export const getInsurancesAction = (token, id) => dispatch => {
	fetch(`${HOST}`+`/api/v1/insurance/${id}/insurance_by_user/`, {
        method: 'GET',
        headers: {
        	'Content-Type': 'application/json',
        	'Authorization': 'Bearer ' + token
        },
    })
	.then(res => res.json())
	.then(insurances =>
		dispatch({
			type: GET_INSURANCES,
			payload: insurances,
		})
	);
};