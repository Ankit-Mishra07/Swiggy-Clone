import { GET_ADDRESS, SHOW_ADDRESS } from "./actionType";

export const showAddressaction = (data) => {
    return {
        type : SHOW_ADDRESS,
        payload : data
    }
}


export const getAddress = (data) => {
    return {
        type : GET_ADDRESS,
        payload : data
    }
}


