import { GET_INSURANCES, GET_INSURANCE } from '../actions/actionTypes';

const initialState = {
  	insurances: [],
  	insurance: ''
}

const insuranceReducer = (state = initialState, action) => {
	
	switch(action.type){
		case GET_INSURANCES:
			return {
				...state,
				insurances: action.payload,
			};
		case GET_INSURANCE:
			return {
				...state,
				insurance: action.payload,
			};
		default:
			return state;
	}
}

export default insuranceReducer;