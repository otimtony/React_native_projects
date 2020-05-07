import { GET_WALLET_TRANSACTIONS, POST_WALLET_TRANSACTION } from '../actions/actionTypes';

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