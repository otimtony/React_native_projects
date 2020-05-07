import { GET_ADVERTISEMENTS, GET_ADVERTISEMENT } from '../actions/actionTypes';

const advertisementsReducer = (state = [], action) => {
	console.lo
	switch (action.type){
		case GET_ADVERTISEMENTS:
			return [...state, action.payload]
		case GET_ADVERTISEMENT:
			return {
				...state,
				advertisement: action.payload,
			};
	}
	return state
}

export default advertisementsReducer;
