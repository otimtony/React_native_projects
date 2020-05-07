import { GET_TOKEN } from '../actions/actionTypes';

const initialState = {
  	token: "",
}

const tokenReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_TOKEN:
			return {
				...state,
				token: action.payload,
			};
		default:
			return state;
	}
};


export default tokenReducer;