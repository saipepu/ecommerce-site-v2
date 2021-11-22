import { cartActions } from "../constants/cartConstants";

export const cartReducers = ( state = { cartItems: []}, {type,payload} ) => {

    switch(type){
        case cartActions.ADD_TO_CART:
            const item = payload;
            const existedItem = state.cartItems.find(
                (x) => x.productId === item.productId
            )

            if( existedItem) {
                console.log('yes')
                console.log(item.productId)
                return{
                    ...state,
                    cartItems: state.cartItems.map((x) => 
                    x.productId === item.productId ? item: x)
                }
            }else{
                return{
                    ...state,
                    cartItems: [...state.cartItems, item],
                }
            }
        case cartActions.REMOVE_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter(
                    (x) => x.productId !== payload.productId
                )
            }
        case cartActions.CART_EMPTY:
            return{ ...state, cartItems: []}
        default: 
            return state;
    }
}