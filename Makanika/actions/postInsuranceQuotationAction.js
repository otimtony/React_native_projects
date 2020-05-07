import { POST_INSURANCE_QUOTATION } from './actionTypes';
import { HOST } from '../utils/utils';

export const postInsuranceQuotationAction = (insuranceQuotationRequestBody, token) => dispatch => {
	fetch(`${HOST}/api/v1/insurance/`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(insuranceQuotationRequestBody),
	})
	.then(response => {
		return response.json();
	})
	.then(responseData => {
		return responseData;
	})
	.then(data => {
		console.log(data);
	})
	.catch(err => {
		console.log(err)
	});
};

