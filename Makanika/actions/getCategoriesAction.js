import { GET_CATEGORIES } from './actionTypes';
import { HOST } from '../utils/utils';

export const getCategoriesAction = (token) => dispatch => {	
	fetch(`${HOST}`+`/api/v1/categories/`, {
        method: 'GET',
        headers: {
        	'Content-Type': 'application/json',
        },
    })
	.then(res => res.json())
	.then(categories =>
		dispatch({
			type: GET_CATEGORIES,
			payload: categories,
		})
	);
};