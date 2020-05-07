import { GET_SAVINGS, GET_TOTAL_SAVINGS } from '../actions/actionTypes';

const initialState = {
  	savings: [],
}

const savingReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_SAVINGS:
			return {
				...state,
				savings: action.payload,
			};
		case GET_TOTAL_SAVINGS:
			return {
				...state,
				total: action.payload,
			};
		default:
			return state;
	}
};


export default savingReducer;