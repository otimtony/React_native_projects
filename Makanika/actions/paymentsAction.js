import { GET_PAYMENTS, GET_PAYMENT } from './actionTypes';

export const getPayments = () => dispatch => {
	fetch('https://rallycoding.herokuapp.com/api/music_albums')
		.then(res => res.json())
		.then(payments =>
			dispatch({
				type: GET_PAYMENTS,
				payload: payments,
			})
		);
};