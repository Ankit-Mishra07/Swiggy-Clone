import { SHOW_SIGNUP } from "./actionType";

export const showSignup = (data) => {
    return {
        type : SHOW_SIGNUP,
        payload : data
    }
}

