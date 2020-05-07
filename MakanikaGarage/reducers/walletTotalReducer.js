import { GET_WALLET_TOTAL } from '../actions/actionTypes';

const initialState = {
  	total: ""
}

const walletTotalReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_WALLET_TOTAL:
			return {
				...state,
				total: action.payload,
			};
		default:
			return state;
	}
};

export default walletTotalReducer;