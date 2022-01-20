import {GET_LOCATION} from './actionType'


export const getLocation = (locate) => {
    return {
        type : GET_LOCATION,
        payload : locate
    }
}