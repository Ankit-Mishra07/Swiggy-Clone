import { DELIVERY_TIME_UN, HILO_UN, LOHI_UN, RATING_UN, RELEVANCE_UN } from "./actionType";

export const getRelevance = (data) => {
  return { type: RELEVANCE_UN, payload: data };
};


export const getDelivery = (data) => {
    return {
        type: DELIVERY_TIME_UN,
        payload : data
    }
}

export const getRating = (data) => {
    return  {
        type : RATING_UN,
        payload : data
    }
}
export const getLowHigh = (data) => {
    return  {
        type : LOHI_UN,
        payload : data
    }

}

export const getHighLow = (data) => {
    return {
        type : HILO_UN,
        payload : data
    }
}












