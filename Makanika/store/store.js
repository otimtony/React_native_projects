import { createStore, applyMiddleware } from 'redux';
import paymentsReducer from '../reducers/paymentsReducer';
import shopReducers from '../reducers/shopReducers';
import vehiclesReducers from '../reducers/vehiclesReducers';
import policyReducers from '../reducers/policyReducers';
import servicesReducers from '../reducers/servicesReducers';
import insuranceReducer from '../reducers/insuranceReducer';
import carBrandsReducer from '../reducers/carBrandsReducer';
import productReducer from '../reducers/productReducer';
import categoryReducer from '../reducers/categoryReducer';
import cartReducer from '../reducers/cartReducer';
import walletReducer from '../reducers/walletReducer';
import walletTotalReducer from '../reducers/walletTotalReducer';
import requestsReducer from '../reducers/requestsReducer';
import advertisementsReducer from '../reducers/advertisementsReducer';
import savingsReducer from '../reducers/savingsReducer';
import loanReducer from '../reducers/loanReducer';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	paymentsReducer,
	shopReducers,
	vehiclesReducers,
	policyReducers,
	servicesReducers,
	insuranceReducer,
	carBrandsReducer,
	categoryReducer,
	productReducer,
	cartReducer,
	requestsReducer,
	advertisementsReducer,
	walletReducer,
	walletTotalReducer,
	savingsReducer,
	loanReducer
})

const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;