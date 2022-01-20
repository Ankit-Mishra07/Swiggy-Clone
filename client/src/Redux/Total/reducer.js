import { TOTAL } from "./actionType";

const init = {
    total : 0
}

export const totalReducer = (state = init , {type, payload}) => {
    switch(type) {
        case TOTAL : 
            return {
                total : state.total + payload
            }
        default :
        return state
    }
}










