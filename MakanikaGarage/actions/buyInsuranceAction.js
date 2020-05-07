import { BUY_INSURANCE} from './actionTypes';
import { HOST } from '../utils/utils';

export const buyInsuranceAction = (insuranceRequestBody, token) => dispatch => {

	fetch(`${HOST}`+`/api/v1/insurance/`, {
		method: 'POST', 
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
		},
		body: JSON.stringify(insuranceRequestBody),
	})
	.then((response) => response.json())
	.then(data => 
		this.props.navigation.navigate('Insurance')
	)
	.catch((error) => {
		console.error('Error:', error);
	});

};