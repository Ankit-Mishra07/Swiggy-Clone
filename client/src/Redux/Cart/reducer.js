import { ADD_TO_CART } from "./actionType";


const init = {
    cart : []
}


export const cartReducer = (state = init, {type, payload}) => {
        switch(type) {
            case ADD_TO_CART:
                return {
                    ...state,
                    cart : [...state.cart, payload]
                }
            default :
            return state
        }
}


