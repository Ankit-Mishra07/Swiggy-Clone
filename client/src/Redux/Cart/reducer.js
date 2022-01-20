import { ADD_TO_CART } from "./actionType";


const init = {
    cart : []
}


export const cartReducer = (state = init, {type, payload}) => {
        switch(type) {
            case ADD_TO_CART:
                return {
                    cart : payload
                }
            default :
            return state
        }
}


