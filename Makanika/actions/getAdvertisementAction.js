import { GET_ADVERTISEMENT } from './actionTypes';
import { HOST } from '../utils/utils';

export const getAdvertisementAction = (id) => dispatch => {
	fetch(`${HOST}`+`/api/v1/advertisements/${id}/`, {
        method: 'GET',
        headers: {
        	'Content-Type': 'application/json',
        },
    })
	.then(res => res.json())
	.then(advertisement =>
		dispatch({
			type: GET_ADVERTISEMENT,
			payload: advertisement,
		})
	);
};