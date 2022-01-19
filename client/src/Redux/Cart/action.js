import { ADD_TO_CART } from "./actionType";


export const addToCart = (data) => {
    return {
        type : ADD_TO_CART,
        payload : data
    }
}


