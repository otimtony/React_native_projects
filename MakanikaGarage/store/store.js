import { createStore, applyMiddleware } from 'redux';
import paymentReducers from '../reducers/paymentReducers';
import requestReducer from '../reducers/requestReducer';
import policyReducer from '../reducers/policyReducer';
import insuranceReducer from '../reducers/insuranceReducer';
import categoryReducer from '../reducers/categoryReducer';
import productReducer from '../reducers/productReducer';
import tokenReducer from '../reducers/tokenReducer';
import loanReducer from '../reducers/loanReducer';
import walletReducer from '../reducers/walletReducer';
import walletTotalReducer from '../reducers/walletTotalReducer';
import cartReducer from '../reducers/cartReducer';
import savingReducer from '../reducers/savingReducer';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	paymentReducers,
	requestReducer,
	policyReducer,
	insuranceReducer,
	categoryReducer,
	productReducer,
	tokenReducer,
	loanReducer,
	walletReducer,
	walletTotalReducer,
	cartReducer,
	savingReducer,
})

const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;