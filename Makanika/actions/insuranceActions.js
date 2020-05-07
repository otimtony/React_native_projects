import { BUY_INSURANCE, REQUEST_INSURANCE, GET_QUOTATIONS, GET_QUOTATION } from './actionTypes';
import { HOST } from '../utils/utils';

export const buyInsurance = (insuranceRequestBody, token) => dispatch => {
	fetch(`${HOST}`+`/api/v1/insurance/`, {
		method: 'POST', 
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'Authorization': 'Bearer ' + token
		},
		body: JSON.stringify(insuranceRequestBody),
	})
	.then((response) => response.json())
	.then(data => 
		console.log("<<<<<<<<<<............>>>>>>>>>>", data)
	)
	.catch((error) => {
		console.error('Error:', error);
	});

};

export const getQuotations = (user_id, token) => dispatch => {

	fetch(`${HOST}`+`/api/v1/insurance/${user_id}/insurance_by_user/`, {
        method: 'GET',
        headers: {
			'Accept': 'application/json',
			'Authorization': 'Bearer ' + token
		},
    })
	.then(res => res.json())
	.then(quotations =>
		dispatch({
			type: GET_QUOTATIONS,
			payload: quotations,
		})
	);

}

export const getQuotation = (id, token) => dispatch => {
	
	fetch(`${HOST}`+`/api/v1/insurance/`+`${id}`+'/', {
        method: 'GET',
        headers: {
			'Accept': 'application/json',
			'Authorization': 'Bearer ' + token
		},
    })
	.then(res => res.json())
	.then(quotation =>
		dispatch({
			type: GET_QUOTATION,
			payload: quotation,
		})
	);
}
