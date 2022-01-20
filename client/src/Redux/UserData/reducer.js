import { GetData, saveData } from "../utils/localstorage"
import { USER_DATA } from "./actionType"
const init = {
    userData : GetData('swiggy_user') || []
}


export const userReducer = (state = init, {type , payload}) => {
    switch(type) {
        case USER_DATA :
            saveData('swiggy_user', [payload])
            return {
                userData : [payload]
            }
        default :
            return state
    }
}


