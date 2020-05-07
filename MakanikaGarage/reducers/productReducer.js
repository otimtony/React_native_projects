import { GET_PRODUCTS, GET_PRODUCT, GET_PRODUCTS_BY_CATEGORY } from '../actions/actionTypes';

const initialState = {
  	products: [],
  	product: ''
}

const productsReducer = (state = initialState, action) => {
	switch(action.type){
		case GET_PRODUCTS:
			return {
				...state,
				products: action.payload,
			};
		case GET_PRODUCTS_BY_CATEGORY:
			return {
				...state,
				products: action.payload,
			};
		case GET_PRODUCT:
			return {
				...state,
				product: action.payload,
			};
		default:
			return state;
	}
}

export default productsReducer;