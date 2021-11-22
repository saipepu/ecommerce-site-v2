import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const initialState = {
    cart: {
        cartItems: localStorage.getItem("fakeStoreCart")
        ? JSON.parse(localStorage.getItem("fakeStoreCart"))
        : [],
    }
}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;