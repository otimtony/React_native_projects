import { GET_QUOTATIONS } from './actionTypes';
import { HOST } from '../utils/utils';

export const getQuotationsAction = (token, id) => dispatch => {
	fetch(`${HOST}`+`/api/v1/insurance/${id}/insurance_by_user/`, {
        method: 'GET',
        headers: {
        	'Content-Type': 'application/json',
        },
    })
	.then(res => res.json())
	.then(quotations =>
		dispatch({
			type: GET_QUOTATIONS,
			payload: quotations,
		})
	);
};