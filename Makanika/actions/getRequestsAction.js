import { GET_REQUESTS } from './actionTypes';
import { HOST } from '../utils/utils';

export const getRequestsAction = () => dispatch => {	
	fetch(`${HOST}`+`/api/v1/garage_requests/`, {
        method: 'GET',
        headers: {
        	'Content-Type': 'application/json',
        },
    })
	.then(res => res.json())
	.then(requests =>
		dispatch({
			type: GET_REQUESTS,
			payload: requests,
		})
	);
};