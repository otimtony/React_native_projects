import { logoutUser } from '../actions/authActions';


const authReducer = (state = [], action) => {
	console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<", action.type, action.payload)
	// switch(action.type){
	// 	case 'GET_PAYMENTS':
	// 		return {
	// 			...state,
	// 			payments: action.payload,
	// 		};
	// 	default:
	// 		return state;
	// }
}

export default paymentReducer;