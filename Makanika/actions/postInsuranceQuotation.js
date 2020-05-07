import { POST_INSURANCE_QUOTATION } from './actionTypes';
import { HOST } from '../utils/utils';

export const postWalletAction = (insuranceData, token) => dispatch => {
	console.log("<<<<<<<<<<<..................>>>>>>>>>>>", insuranceData, token)
	// fetch(`${HOST}/api/v1/wallet/`, {
	// 	method: 'POST',
	// 	headers: {
	// 		Accept: 'application/json',
	// 		'Content-Type': 'application/json',
	// 	},
	// 	body: JSON.stringify(walletData),
	// })
	// .then(response => {
	// 	return response.json();
	// })
	// .then(responseData => {
	// 	return responseData;
	// })
	// .then(data => {
	// 	console.log("<<<<<<<<<<<.......amount......>>>>>>>>>>>>>", data);
	// })
	// .catch(err => {
	// 	console.log(err)
	// });
};