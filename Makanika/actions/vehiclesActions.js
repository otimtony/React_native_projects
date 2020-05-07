import { GET_VEHICLES } from './actionTypes';
import { HOST } from '../utils/utils';

export const getVehicles = () => dispatch => {

	fetch(`${HOST}`+`/api/v1/vehicles/`)
	.then(res => res.json())
	.then(vehicles =>
		dispatch({
			type: GET_VEHICLES,
			payload: vehicles,
		})
	);
	
};