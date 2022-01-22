import { GetData, saveData } from "../utils/localstorage";
import { GET_ADDRESS, SHOW_ADDRESS} from "./actionType";

const init = {
    showAddress : false
}
export const showAddressReducer = (state=init,{type, payload}) => {
    switch(type) {
        case SHOW_ADDRESS : 
            return {
                showAddress : payload
            }
        default :
        return state
    }
}

const init2 = {
    myAddress : GetData('swiggyAddress') || []
}

export const getAddressReducer = (state = init2, {type, payload}) => {
        switch(type) {
            case GET_ADDRESS :
                saveData('swiggyAddress', [payload])
                return {
                    myAddress : [payload]
                }
            default :
            return state
        }
}
