import { GET_QUOTATION } from './actionTypes';
import { HOST } from '../utils/utils';

export const getQuotationAction = (token, id) => dispatch => {
	fetch(`${HOST}`+`/api/v1/insurance/${id}/`, {
        method: 'GET',
        headers: {
        	'Content-Type': 'application/json',
        },
    })
	.then(res => res.json())
	.then(quotation =>
		dispatch({
			type: GET_QUOTATION,
			payload: quotation,
		})
	);
};
