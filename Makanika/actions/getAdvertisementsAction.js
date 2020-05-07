import { GET_ADVERTISEMENTS } from './actionTypes';
import { HOST } from '../utils/utils';

export const getAdvertisementsAction = () => dispatch => {	
	fetch(`${HOST}`+`/api/v1/advertisements/`, {
        method: 'GET',
        headers: {
        	'Content-Type': 'application/json',
        },
    })
	.then(res => res.json())
	.then(advertisements =>
		dispatch({
			type: GET_ADVERTISEMENTS,
			payload: advertisements,
		})
	);
};