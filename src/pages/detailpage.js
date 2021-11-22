import React,{useEffect} from 'react';
import { Image } from '@chakra-ui/react';
import { Flex, Text, Divider } from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';
import { Tag } from '@chakra-ui/tag';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { AiFillHeart } from 'react-icons/ai';
import { getRelatedProducts, getSingleProduct } from '../redux/actions/productActions';
import ProductCard from '../components/ProductCard';
import { addToCart } from '../redux/actions/cartActions';

const DetailPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const { loading, product, error} = useSelector((state) => state.singleProduct);
    const { products } = useSelector((state) => state.relatedProducts);

    useEffect(() => {
        if(!product.category){
            dispatch(getSingleProduct(id))
        }
        if(product.category){
            console.log(product.category)
            dispatch(getRelatedProducts(product.category))
        }
    }, [product.category])

    const addToCartHandler = () => {
        dispatch(addToCart(product.id, product, product.price, 1))
        history.push('/cart')
    }

    // useEffect(() => {
    //     let cart = localStorage.getItem('fakestore')
    //     cart = JSON.parse(cart)
    //     console.log(cart)
    //     if( cart.length > 0){
    //         console.log('hi')
    //         cart = cart
    //     }else{
    //         cart[0]= []
    //         cart[0].product = undefined
    //         cart[0].qty = undefined
    //     }
    //     let p = cart[0].product;
    //     console.log(p)
    //     let qty = cart[0].qty;
    //     dispatch(addToCart(p.id,p,p.price,qty))
    // },[])

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
        <Flex mt="110px" mb="40px" mx="120">
            { loading ? (
                <h2>Loading ...</h2>
            ) : (
            <Flex direction="column" width="100%" gridgap="30px">
                <Flex justify="space-evenly" width="100%">
                    <Image src={product.image} width="300px"/>
                    <Flex direction="row" gridgap="15px" width="400px" mt="50px">
                        <Flex direction="column" align="center" gridGap="15px">
                            <Tag size="md" variant="outline">
                                Category - {product.category}
                            </Tag>
                            <AiFillHeart
                            style = {{ fontSize: "22px", color: "red", cursor: "pointer"}}
                            />
                            <Text fontSize="20px" fontWeight="700">
                                {product.title}
                            </Text>
                            <Text fontSize="16px" fontWeight="500">
                                $ {product.price}
                            </Text>
                            <Text fontSize="16px">
                                {product.description}
                            </Text>
                            <Flex gridgrap="20px">
                                <Button colorScheme="teal" mr="20px" onClick={() => addToCartHandler()}>
                                    Add To Cart
                                </Button>
                                <Button colorScheme="teal" variant="outline">
                                    Buy Now
                                </Button>
                            </Flex>
                        </Flex>
                    </Flex>
                    </Flex>
                    <Divider />
                    <Text fontSize="20px" fontWeight="700">
                        Related Products
                    </Text>
                    <Flex
                        flexWrap="wrap"
                        justify="center"
                        gridGap="20px"
                        mb="40px"
                    >
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                image={product.image}
                                title={product.title}
                                price={product.price}
                                />
                        ))}
                    </Flex>

            </Flex> 
            )}
            
        </Flex>
    )
}
export default DetailPage;