import { combineReducers } from "redux";
import { productsReducers, singleProductReducers, relatedProductReducers } from "./reducers/productReducers";
import { cartReducers } from "./reducers/cartReducers";

export default combineReducers({
    products: productsReducers,
    singleProduct: singleProductReducers,
    relatedProducts: relatedProductReducers,
    cart: cartReducers,
});