

import { GET_CAT_DATA } from "./actionType";

export const getcategoryData = (data) => {
    return {
        type : GET_CAT_DATA,
        payload : data
    }
}


