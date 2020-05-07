import { GET_WALLET_TRANSACTIONS } from '../actions/actionTypes';

const initialState = {
  	transactions: [],
  	transaction: ""
}

const walletReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_WALLET_TRANSACTIONS:
			return {
				...state,
				transactions: action.payload,
			};
		default:
			return state;
	}
};

export default walletReducer;