import { findTowing } from '../actions/towingActions';

const initialState = {
  	vechile: '',
  	description: '',
}

const towingReducer = (state = initialState, action) => {
	// switch(action.type){
	// 	case 'GET_PAYMENTS':
	// 				return {
	// 			...state,
	// 			payments: action.payload,
	// 		};
	// 	default:
	// 		return state;
	// }
	return state;
}

export default towingReducer;