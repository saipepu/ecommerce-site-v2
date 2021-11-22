import axios from "axios";
import { productActions } from "../constants/productConstants";

export const getAllProducts = () => async(dispatch) => {
    console.log('hi')
    dispatch({
        type: productActions.PRODUCTS_REQUEST
    })
    try{
        const { data } = await axios.get("https://fakestoreapi.com/products")
        dispatch({
            type: productActions.PRODUCTS_SUCCESS,payload: data
        });
    }catch(e){
        dispatch({
            type: productActions.PRODUCTS_FAIL, payload: e.message 
        });
    }
}

export const getSingleProduct = (id) => async(dispatch) => {
    dispatch({
        type: productActions.SINGLE_PRODUCT_REQUEST
    })
    try{
        const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
        dispatch({
            type: productActions.SINGLE_PRODUCT_SUCCESS, payload: data 
        })
    }catch(e) {
        dispatch({
            type: productActions.SINGLE_PRODUCT_FAIL, payload: e.message 
        })
    }
}

export const getRelatedProducts = (category) => async(dispatch) => {
    dispatch({
        type: productActions.RELATED_PRODUCT_REQUEST
    })
    try{
        const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
    dispatch({
        type: productActions.RELATED_PRODUCT_SUCCESS, payload: data
    })
    }catch(e) {
        dispatch({
            type: productActions.SINGLE_PRODUCT_FAIL, payload: e.message
        })
    }
}