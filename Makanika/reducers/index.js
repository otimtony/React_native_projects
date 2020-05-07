import { combineReducers } from 'redux'
import paymentReducer from './paymentReducer';
import shopReducers from './shopReducers';
import towingReducers from './towingReducers';

export default rootReducer = combineReducers({
	paymentReducer,
	shopReducers,
	towingReducers,
})