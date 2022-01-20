import { SHOW_LOGIN } from "./actionType";

const init = {
    show : false
}
export const showLoginReducer = (state=init,{type, payload}) => {
    switch(type) {
        case SHOW_LOGIN : 
            return {
                show : payload
            }
        default :
        return state
    }
}


