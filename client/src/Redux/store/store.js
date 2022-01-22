import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import { productReducer } from '../Products/reducer'
import { sidenavReducer } from '../ForSideNav/reducer'
import thunk from 'redux-thunk'
import { restReducer } from '../Restaurent_Prod/reducer'
import { cartReducer } from '../Cart/reducer'
import { showLoginReducer } from '../ForLogin/reducer'
import { showSignReducer } from '../ForSignup/reducer'
import {userReducer} from '../UserData/reducer'
import { locateReducer } from '../Location/reducer'
import { SubTotalReducer } from '../Total/reducer'
import { getAddressReducer, showAddressReducer } from '../ForAddress.js/reducer'

const rootReducer = combineReducers({
    productState : productReducer,
    sideNavState : sidenavReducer,
    restProdState : restReducer,
    cartState : cartReducer,
    showLogState : showLoginReducer,
    showSignState : showSignReducer,
    userState : userReducer,
    locateState : locateReducer,
    subTotalState : SubTotalReducer,
    showAddressState : showAddressReducer,
    myAddressState : getAddressReducer
})


export const store = createStore(rootReducer, compose(applyMiddleware(thunk)))




