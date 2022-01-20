import { SHOW_SIGNUP} from "./actionType";

const init = {
    showsign : false
}
export const showSignReducer = (state=init,{type, payload}) => {
    switch(type) {
        case SHOW_SIGNUP : 
            return {
                showsign : payload
            }
        default :
        return state
    }
}