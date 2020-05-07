import { GET_QUOTATIONS, GET_QUOTATION, GET_INSURANCE } from '../actions/actionTypes';

const initialState = {
  	quotations: [],
}

const insuranceReducer = (state = initialState, action) => {
	switch(action.type){
		case GET_QUOTATIONS:
			return {
				...state,
				quotations: action.payload,
			};
		case GET_QUOTATION:
			return {
				...state,
				quotation: action.payload,
			};
		default:
			return state;
	}
}

export default insuranceReducer;