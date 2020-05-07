import { GET_WALLET_TRANSACTIONS } from './actionTypes';
import { HOST } from '../utils/utils';

export const getWalletTransactionsAction = (token, id) => dispatch => {	
	console.log("<<<<<<<<<<<......token.....>>>>>>>>>>>>", token)
	fetch(`${HOST}`+`/api/v1/wallet/${id}/client_transactions/`, {
        method: 'GET',
        headers: {
        	'Content-Type': 'application/json',
        },
    })
	.then(res => res.json())
	.then(transaction =>
		dispatch({
			type: GET_WALLET_TRANSACTIONS,
			payload: transaction,
		})
	);
};