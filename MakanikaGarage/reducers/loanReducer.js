import { GET_LOANS, GET_LOAN } from '../actions/actionTypes';

const initialState = {
  	loans: [],
  	loan: ''
}

const loanReducer = (state = initialState, action) => {
	switch(action.type){
		case GET_LOANS:
			return {
				...state,
				loans: action.payload,
			};
		case GET_LOAN:
			return {
				...state,
				loan: action.payload,
			};
		default:
			return state;
	}
}

export default loanReducer;