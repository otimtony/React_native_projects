import { GET_LOAN_APPLICATIONS } from './actionTypes';
import { HOST } from '../utils/utils';

export const getLoanApplications = () => dispatch => {
	
	fetch(`${HOST}`+`/api/v1/loan/`, {
        method: 'GET',
    })
	.then(res => res.json())
	.then(applications =>
		dispatch({
			type: GET_LOAN_APPLICATIONS,
			payload: applications,
		})
	);

}
