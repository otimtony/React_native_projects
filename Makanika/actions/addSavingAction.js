import { ADD_SAVING } from './actionTypes';
import { HOST } from '../utils/utils';

export const addSavingAction = (token, savingData) => dispatch => {
	fetch(`${HOST}/api/v1/savings/`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(savingData),
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