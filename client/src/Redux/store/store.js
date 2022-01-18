import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import { productReducer } from '../Products/reducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    productState : productReducer
})



export const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__()))




