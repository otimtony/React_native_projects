import { POST_WALLET_TRANSACTION } from './actionTypes';
import { HOST } from '../utils/utils';

export const postWalletAction = (walletData, token) => dispatch => {
	fetch(`${HOST}/api/v1/wallet/`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(walletData),
	})
	.then(response => {
		return response.json();
	})
	.then(responseData => {
		return responseData;
	})
	.then(data => {
		console.log("<<<<<<<<<<<.......amount......>>>>>>>>>>>>>", data);
	})
	.catch(err => {
		console.log(err)
	});
};