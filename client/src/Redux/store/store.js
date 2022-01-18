import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import { productReducer } from '../Products/reducer'
import { sidenavReducer } from '../ForSideNav/reducer'
import thunk from 'redux-thunk'
import { restReducer } from '../Restaurent_Prod/reducer'

const rootReducer = combineReducers({
    productState : productReducer,
    sideNavState : sidenavReducer,
    restProdState : restReducer
})



export const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__()))




