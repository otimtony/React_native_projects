import { GET_REQUEST } from './actionTypes';
import { HOST } from '../utils/utils';

export const getRequestAction = (id) => dispatch => {	
	fetch(`${HOST}`+`/api/v1/garage_requests/16/`, {
        method: 'GET',
        headers: {
        	'Content-Type': 'application/json',
        },
    })
	.then(res => res.json())
	.then(request =>
		dispatch({
			type: GET_REQUEST,
			payload: request,
		})
	);
};