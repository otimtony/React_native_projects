import { GET_PRODUCTS } from './actionTypes';
import { HOST } from '../utils/utils';

export const getProductsAction = (token) => dispatch => {	
	fetch(`${HOST}`+`/api/v1/shop_items/`, {
        method: 'GET',
        headers: {
        	'Content-Type': 'application/json',
        	'Authorization': 'Bearer ' + token
        },
    })
	.then(res => res.json())
	.then(products =>
		dispatch({
			type: GET_PRODUCTS,
			payload: products,
		})
	);
};