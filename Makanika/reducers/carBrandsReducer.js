import { GET_CAR_BRANDS } from '../actions/actionTypes';

const initialState = {
	brands: [],
	brand: ''
}

const carBrandsReducer = (state = initialState, action) => {
	switch(action.type){
		case GET_CAR_BRANDS:
			return {
				...state,
				brands: action.payload,
			};
		default:
			return state;
	}
}

export default carBrandsReducer;