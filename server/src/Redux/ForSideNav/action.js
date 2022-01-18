import { TOP_PICK, SEEALL, VEGE, WHATSNEW, PREMIUM } from "./actionType";


export const getTop_picks = () => {
    return {
        type : TOP_PICK
    }
} 

export const getSeeAll = () => {
    return {
        type : SEEALL
    }
}
export const getWhatsnew = () => {
    return {
        type : WHATSNEW
    }
}

export const getVege = () => {
    return {
        type : VEGE
    }
}
export const getPremium = () => {
    return {
        type : PREMIUM
    }
}

