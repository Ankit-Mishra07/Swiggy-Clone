import { GET_CAT_DATA } from "./actionType";

const init = {
    lists : []
}


export const categoryReducer = (state = init, {type , payload}) => {
    switch(type) {
        case GET_CAT_DATA : 
        return {
            lists : payload
        }
        default :
            return state
    }
}

