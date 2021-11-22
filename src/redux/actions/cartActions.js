import { cartActions } from "../constants/cartConstants";

export const addToCart = ( productId, product, price, qty) => async(dispatch, getState) => {
    if( product ){
        dispatch({
            type: cartActions.ADD_TO_CART,
            payload: {productId, product, price, qty},
        })
    }
    localStorage.setItem(
        "fakestore",
        JSON.stringify(getState().cart.cartItems)
    )
}
export const removeFromCart = (productId) =>  async(dispatch, getState) => {
    dispatch({
        type: cartActions.REMOVE_FROM_CART,
        payload: { productId }
    })
    localStorage.setItem(
        "fakestore",
        JSON.stringify(getState().cart.cartItems)
    )
}

export const cartEmpty = () => async(dispatch, getState) => {
    dispatch({ type: cartActions.CART_EMPTY})
    localStorage.setItem(
        "fakestore",
        JSON.stringify(getState().cart.cartItems)
    )
}