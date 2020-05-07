import { GET_CAR_BRANDS } from './actionTypes';
import { HOST } from '../utils/utils';

const getCarBrandsAction = () => dispatch => {
	fetch(`${HOST}`+`/api/v1/car_brands/`, {
		method: 'GET', 
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
		},
	})
	.then((response) => response.json())
	.then(brands => 
		dispatch({
			type: GET_CAR_BRANDS,
			payload: brands,
		})
	)
	.catch((error) => {
		console.error('Error:', error);
	});
}

export default getCarBrandsAction;