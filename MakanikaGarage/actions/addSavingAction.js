import { ADD_SAVING} from './actionTypes';
import { HOST } from '../utils/utils';

export const addSavingAction = (amount) => dispatch => {
	console.log("<<<<<<<<<<<.......addSavingAction......>>>>>>>>>>")
	const savingData = {
		"user": 10,
		"amount": amount
	}
	fetch(`${HOST}`+`/api/v1/savings/`, {
		method: 'POST', 
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
		},
		body: JSON.stringify(savingData),
	})
	.then((response) => response.json())
	.then(data => 
		console.log("<<<<<<<<<<<<........ddddaaattttaaaa.......>>>>>>>>>>>>>", data)
	)
	.catch((error) => {
		console.error('Error:', error);
	});

};