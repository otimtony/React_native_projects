import { GET_POLICIES } from '../actions/actionTypes';

const initialState = {
  	policies: [],
  	policy: ''
}

const policyReducer = (state = initialState, action) => {
	
	switch(action.type){
		case GET_POLICIES:
			return {
				...state,
				policies: action.payload,
			};
		default:
			return state;
	}
}

export default policyReducer;