import {USER_DATA} from './actionType'


export const userDataaction = (data) => {
    return {
        type : USER_DATA,
        payload : data
    }
}




