import { GET_WALLET_TRANSACTIONS } from './actionTypes';
import { HOST } from '../utils/utils';

export const getWalletTransactionsAction = (token, user_id) => dispatch => {
	fetch(`${HOST}`+ `/api/v1/wallet/${user_id}/client_transactions/`, {
        method: 'GET',
        headers: {
        	'Content-Type': 'application/json',
        },
    })
	.then(res => res.json())
	.then(requests =>
		dispatch({
			type: GET_WALLET_TRANSACTIONS,
			payload: requests,
		})
	);
};