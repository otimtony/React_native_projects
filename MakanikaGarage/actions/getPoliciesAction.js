import { GET_POLICIES } from './actionTypes';
import { HOST } from '../utils/utils';

export const getPoliciesAction = () => dispatch => {
	
	fetch(`${HOST}`+`/api/v1/policies/`, {
        method: 'GET',
        headers: {
        	'Content-Type': 'application/json',
        },
    })
	.then(res => res.json())
	.then(policies =>
		dispatch({
			type: GET_POLICIES,
			payload: policies,
		})
	);
};