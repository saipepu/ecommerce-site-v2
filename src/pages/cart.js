import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/react";
import { Divider, Flex, Text } from "@chakra-ui/react";
import React,{ useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
} from "@chakra-ui/react"
const Cart = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

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

    // useEffect(() => {
    //     let cart = localStorage.getItem('fakestore')
    //     cart = JSON.parse(cart)
    //     console.log(cart)
    //     if( cart.length > 0){
    //         console.log('hi')

    //     }else{
    //         cart[0]=[]
    //         cart[0].product = []
    //         cart[0].qty = []
    //     }
    //     let p = cart[0].product;
    //     let qty = cart[0].qty;
    //     dispatch(addToCart(p.id,p,p.price,qty))
    // },[])
    useEffect(() => {
        let cart = localStorage.getItem('fakestore')
        cart = JSON.parse(cart)
        console.log(cart)
    },[])


    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const decreaseQty = (item) => {
        if(item.qty > 1) {
            dispatch(addToCart(item.productId, item.product, item.price, item.qty-1))
        }
    }

    const increaseQty = (item) => {
        dispatch(addToCart(item.productId, item.product, item.price, item.qty + 1))
    }

    return(
        <Flex mt="110px" mb="40px" mx="100px" direction="column" align="center" gridGap="70px" justify="space-between">
            <Table variant="simple" width="100%">
                <TableCaption>
                    Thanks for shopping with us. Here is your cart!
                </TableCaption>
                <Thead>
                    <Tr>
                        <Th>Image</Th>
                        <Th>Name</Th>
                        <Th>Quantity</Th>
                        <Th>Total Price</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {cartItems.map((item, i) => (
                        <Tr>
                            <Td>
                                <Image src={item.product.image} h="100px" />
                            </Td>
                            <Td>
                                <Text>{item.product.title}</Text>
                            </Td>
                            <Td >
                                <Flex justifyContent="space-around" align="center" gridGrap="10px">
                                    <Button padding="10px" onClick={() => decreaseQty(item)}>-</Button>
                                    <Text>{item.qty}</Text>
                                    <Button padding="10px" onClick={() => increaseQty(item)}>+</Button>
                                </Flex>
                            </Td>
                            <Td>
                                <Text>$ {(item.price * item.qty).toFixed(2)}</Text>
                            </Td>
                            <Td>
                                <AiFillDelete
                                    style={{ fontSize: "30px", cursor: "pointer"}}
                                    onClick={() => removeFromCartHandler(item.productId)}>
                                </AiFillDelete>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            <Flex direction="column" gridGap="20px">
                <Text fontWeight="700" fontSize="20px">
                    Order Summary
                </Text>
                <Flex
                    direction="column"
                    width="350px"
                    shadow="lg"
                    p="20px"
                    borderRadius="10px"
                    gridGap="15px"
                >
                    <Flex justify="space-between">
                        <Text fontWeight="500">Item Price</Text>
                        <Text fontWeight="500">$ </Text>
                    </Flex>
                    <Flex justify="space-between">
                        <Text fontWeight="500">Discount Price</Text>
                        <Text fontWeight="500">$ </Text>
                    </Flex>
                    <Flex justify="space-between">
                        <Text fontWeight="500">Tax Price</Text>
                        <Text fontWeight="500">$ </Text>
                    </Flex>
                    <Flex justify="space-between">
                        <Text fontWeight="500">Delivery Price</Text>
                        <Text fontWeight="500">$ 10</Text>
                    </Flex>
                    <Divider />
                    <Flex justify="space-between">
                        <Text fontWeight="500">Total Price</Text>
                        <Text fontWeight="500">
                            $
                        </Text>
                    </Flex>
                    <Button colorScheme="teal">Checkout Now</Button>
                </Flex>
            </Flex>
        </Flex>
    )
}
export default Cart;