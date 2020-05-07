import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/actionTypes';

const cartReducer = (state = [], action) => {
	if (state.length >= 1) {
		let json_state = state
		let product = action.payload

		for(let i = 0; i < json_state.length; i++) {
		    let obj = json_state[i];
		    if(obj.id === product.id){
		    	obj.quantity = obj.quantity + product.quantity 
		    	obj.total = obj.quantity * obj.price
		   	}else {
		   		switch (action.type){
					case ADD_TO_CART:
						return [...state, action.payload]
					case REMOVE_FROM_CART:
						return state.filter(cartItem => cartItem.id !== action.payload.id)
				}
		   	}
		}
	
	}else{
		switch (action.type){
			case ADD_TO_CART:
				return [...state, action.payload]
			case REMOVE_FROM_CART:
				return state.filter(cartItem => cartItem.id !== action.payload.id)
		}
	}

	return state
}

export default cartReducer;