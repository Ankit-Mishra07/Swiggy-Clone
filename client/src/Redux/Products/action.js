import { GET_PRODUCTS } from "./actionType";

export const getAllProducts = (data) => {
    return {
        type : GET_PRODUCTS,
        payload : data
    }
}





