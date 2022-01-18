import { TOP_PICK, SEEALL, VEGE, WHATSNEW, PREMIUM } from "./actionType";

const init = {
    top_picks : true,
    vege : false,
    whatsnew : false,
    premium : false,
    seeAll : false
}


export const sidenavReducer = (state = init, {type}) => {
    switch(type) {
        case TOP_PICK :
            return {
                top_picks : true,
                vege : false,
                whatsnew : false,
                premium : false,
                seeAll : false
            }
        case VEGE : 
            return {
                top_picks : false,
                vege : true,
                whatsnew : false,
                premium : false,
                seeAll : false
            }
        case WHATSNEW :
            return {
                top_picks : false,
                vege : false,
                whatsnew : true,
                premium : false,
                seeAll : false
            }
        case PREMIUM : 
            return {
                top_picks : false,
                vege : false,
                whatsnew : false,
                premium : true,
                seeAll : false
            }
        case SEEALL : 
            return {
                top_picks : false,
                vege : false,
                whatsnew : false,
                premium : false,
                seeAll : true
            }
        default :
         return state
    }
}

















