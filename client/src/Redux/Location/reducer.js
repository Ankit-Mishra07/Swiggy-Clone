import {GET_LOCATION} from './actionType'

const init = {
    location : ""
}
export const locateReducer = (state = init, {type , payload}) => {
        switch(type) {
            case GET_LOCATION :
                return {
                    location : payload
                }
            default :
                return state
        }
}
