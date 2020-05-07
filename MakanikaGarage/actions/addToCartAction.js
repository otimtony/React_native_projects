import { ADD_TO_CART} from './actionTypes';
import { HOST } from '../utils/utils';

export const addToCartAction = (product) => dispatch => {
	dispatch({
		type: ADD_TO_CART,
		payload: product,
	})
};