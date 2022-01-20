import { SHOW_LOGIN } from "./actionType";


export const showLogin = (data) => {
    return  {
        type : SHOW_LOGIN,
        payload : data
    }
}
