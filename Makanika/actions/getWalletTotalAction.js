import { GET_WALLET_TOTAL } from './actionTypes';
import { HOST } from '../utils/utils';

export const getWalletTotalAction = (token, id) => dispatch => {	
	fetch(`${HOST}`+`/api/v1/wallet_total/${id}/wallet_total/`, {
        method: 'GET',
        headers: {
        	'Content-Type': 'application/json',
        },
    })
	.then(res => res.json())
	.then(total =>
		dispatch({
			type: GET_WALLET_TOTAL,
			payload: total,
		})
	);
};