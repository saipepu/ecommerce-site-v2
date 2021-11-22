import { productActions } from "../constants/productConstants";

export const productsReducers = (state = {products: [] }, {type, payload}) => {
    
    switch(type){
        case productActions.PRODUCTS_REQUEST:
            return{ loading: true, products: []};
        case productActions.PRODUCTS_SUCCESS:
            return{ loading: false, products: payload};
        case productActions.PRODUCTS_FAIL:
            return{ loading: false, error: payload};
        default:
            return state;
    }
};

export const singleProductReducers = (state = { product: {}}, {type,payload} ) => {
    switch(type){
        case productActions.SINGLE_PRODUCT_REQUEST:
            return{ loading: true, product: {}};
        case productActions.SINGLE_PRODUCT_SUCCESS:
            return{ loading: false, product: payload};
        case productActions.SINGLE_PRODUCT_FAIL:
            return{ loading: false, error: payload };
        default:
            return state;
    }
}

export const relatedProductReducers = (state = { products: []}, {type,payload}) => {
    switch(type){
        case productActions.RELATED_PRODUCT_REQUEST:
            return{ loading: true, products: []};
        case productActions.RELATED_PRODUCT_SUCCESS:
            return{ loading: false, products: payload};
        case productActions.RELATED_PRODUCT_FAIL:
            return{ loading: false, error: payload };
        default:
            return state;
    }
}