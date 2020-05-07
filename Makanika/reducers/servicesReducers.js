import { GET_SERVICES } from '../actions/actionTypes';

const initialState = {
	services: [],
	service: ''
}

const servicesReducers = (state = initialState, action) => {
	switch(action.type){
		case GET_SERVICES:
			return {
				...state,
				services: action.payload,
			};
		default:
			return state;
	}
}

export default servicesReducers;