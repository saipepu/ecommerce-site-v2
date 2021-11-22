import { Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getAllProducts } from "../redux/actions/productActions";
import ProductCard from "../components/ProductCard";
import TheSkeleton from "../components/Skeleton";
import { addToCart } from "../redux/actions/cartActions";

const Homepage = () => {
    const { loading, products, error } = useSelector((state) => state.products);
    console.log(products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    },[])
    useEffect(() => {
        let cart = localStorage.getItem('fakestore')
        cart = JSON.parse(cart)
        if( cart.length > 0){
            cart.map(item => {
                dispatch(addToCart(item.productId,item.product,item.price,item.qty))
            })
        }else{
            cart = []
        }
    },[])
    return(
        <Flex
            flexWrap="wrap"
            justify="center"
            gridGap="20px"
            mt="110px"
            mb="40px"
            mx="100px"
        >
            {loading && [0,1,2,3,4,5,6,7].map((item,i) => <TheSkeleton key={i}/> )}
            
            {products.map((product) => (
                <ProductCard
                key = {product.id}
                id = {product.id}
                image = {product.image}
                title = {product.title}
                price = {product.price}
                />
            ))}
        </Flex>
    )
}
export default Homepage;