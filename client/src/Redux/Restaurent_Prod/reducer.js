import { DELIVERY_TIME_UN, HILO_UN, LOHI_UN, RATING_UN, RELEVANCE_UN } from "./actionType";

const init = {
    relevance : true,
    restProd : [],
    deltime : false,
    rating : false,
    hilo : false,
    lohi : false
}


export const restReducer = (state=init, {type, payload}) => {
    switch(type) {
        case RELEVANCE_UN :
            return {
                relevance : true,
                restProd : payload,
                deltime : false,
                rating : false,
                hilo : false,
                lohi : false
            }
        case DELIVERY_TIME_UN :
            return {
                relevance : false,
                restProd : payload,
                deltime : true,
                rating : false,
                hilo : false,
                lohi : false
            }
        case RATING_UN : 
            return {
                relevance : false,
                restProd : payload,
                deltime : false,
                rating : true,
                hilo : false,
                lohi : false
            }
        case HILO_UN :
            return {
                relevance : false,
                restProd : payload,
                deltime : false,
                rating : false,
                hilo : true,
                lohi : false
            }
        case LOHI_UN :
            return {
                relevance : false,
                restProd : payload,
                deltime : false,
                rating : false,
                hilo : false,
                lohi : true
            }
        default :
        return state
    }
}








