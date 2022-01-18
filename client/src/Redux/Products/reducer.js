import { GET_PRODUCTS } from "./actionType";

const init = {
    products : []
}


export const productReducer = (state = init , {type , payload}) => {
        switch(type) {
            case GET_PRODUCTS : 
            return {
                products : payload
            }
            default : 
            return state
        }
}

