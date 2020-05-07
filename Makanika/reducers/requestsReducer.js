import { GET_REQUESTS, GET_REQUEST } from '../actions/actionTypes';

const initialState = {
	requests: [],
	request: ""
}

const requestsReducer = (state = initialState, action) => {
	switch(action.type){
		case GET_REQUESTS:
			return {
				...state,
				requests: action.payload,
			};
		case GET_REQUEST:
			return {
				...state,
				request: action.payload,
			};
		default:
			return state;
	}
}

export default requestsReducer;