import { GET_CATEGORIES, GET_PRODUCTS, GET_VEHICLES, GET_PRODUCT } from './actionTypes';
import { HOST } from '../utils/utils';

export const getCategories = (token) => dispatch => {
	fetch(`${HOST}`+`/api/v1/categories/`, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + token
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

export const getProducts = (token) => dispatch => {
	fetch(`${HOST}`+`/api/v1/shop_items/`, {
        method: 'GET',
        headers: {
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

export const getProduct = (token, product_id) => dispatch => {
	fetch(`${HOST}`+`/api/v1/shop_items/`+`${product_id}`+`/`, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + token
        },
    })
	.then(res => res.json())
	.then(product =>
		dispatch({
			type: GET_PRODUCT,
			payload: product,
		})
	);
}

export const getProductByCategory = (id) => dispatch => {
	// fetch(`${HOST}`+`/api/v1/shop_items/`+`${slug.slug}`+`/`, {
 //        method: 'GET',
 //        headers: {
 //          'Authorization': 'Bearer ' + token.token
 //        },
 //    })
	// .then(res => res.json())
	// .then(product =>
	// 	dispatch({
	// 		type: GET_PRODUCT,
	// 		payload: product,
	// 	})
	// );
}
