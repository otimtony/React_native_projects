import { GET_REQUEST } from './actionTypes';
import { HOST } from '../utils/utils';

const getRequestAction = (id) => dispatch => {

	fetch(`${HOST}/api/v1/garage_requests/${id}/`, {
        method: 'GET',
        headers: {
			'Accept': 'application/json',
		},
    })
	.then(res => res.json())
	.then(request =>
		dispatch({
			type: GET_REQUEST,
			payload: request,
		})
	);


}

export default getRequestAction;