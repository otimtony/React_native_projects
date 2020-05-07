import { GET_PRODUCT } from './actionTypes';
import { HOST } from '../utils/utils';

export const getProductAction = (id, token) => dispatch => {	
	fetch(`${HOST}`+`/api/v1/shop_items/${id}/`, {
        method: 'GET',
        headers: {
        	'Content-Type': 'application/json',
        },
    })
	.then(res => res.json())
	.then(product =>
		dispatch({
			type: GET_PRODUCT,
			payload: product,
		})
	);
};