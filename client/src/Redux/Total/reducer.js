import { GetData, saveData } from "../utils/localstorage";
import { TOTAL } from "./actionType";

const init = {
    total : GetData('swiggyTotal') || [0]
}

export const SubTotalReducer = (state = init , {type, payload}) => {
    switch(type) {
        case TOTAL : 
            saveData('swiggyTotal', [Number(state.total)+ Number(payload)])
            return {
                total : [Number(state.total) + Number(payload)]
            }
        default :
        return state
    }
}
