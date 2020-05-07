import { categories, products } from '../actions/towingActions';
import { GET_CATEGORIES, GET_PRODUCTS, GET_PRODUCT } from '../actions/actionTypes';

const initialState = {
  	contact: '',
  	topUpAmount: '',
  	categories: [],
	products: [],
}

const shopReducer = (state = initialState, action) => {
	switch(action.type){
		case GET_CATEGORIES:
			return {
				...state,
				categories: action.payload,
			};
		case GET_PRODUCTS:
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

export default shopReducer;