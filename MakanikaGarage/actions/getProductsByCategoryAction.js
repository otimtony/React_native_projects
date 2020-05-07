import { GET_PRODUCTS_BY_CATEGORY } from './actionTypes';
import { HOST } from '../utils/utils';

export const getProductsByCategoryAction = (token, category_id) => dispatch => {
	fetch(`${HOST}`+`/api/v1/shop_items/${category_id}/product_by_category/`, {
        method: 'GET',
        headers: {
        	'Content-Type': 'application/json',
        	'Authorization': 'Bearer ' + token
        },
    })
	.then(res => res.json())
	.then(products =>
		dispatch({
			type: GET_PRODUCTS_BY_CATEGORY,
			payload: products,
		})
	);
};