import { GET_VEHICLES } from '../actions/actionTypes';

const initialState = {
  	vehicles: [],
}

const vehiclesReducers = (state = initialState, action) => {
	switch(action.type){
		case GET_VEHICLES:
			return {
				...state,
				vehicles: action.payload,
			};
		default:
			return state;
	}
}

export default vehiclesReducers;