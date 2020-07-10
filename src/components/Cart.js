import React ,{useContext} from 'react';
import {ShopContext} from '../context/shopContext';
import { SideDrawer, Text, Row, Col, Div, Anchor} from 'atomize'

function Cart() {

    const {isCartOpen, closeCart, checkout} = useContext(ShopContext);

    return (
        <SideDrawer isOpen={isCartOpen} onClose={closeCart}>
           <Div d="flex" flexdirection="column" m={{b:'8rem'}}>
            {checkout.lineItems && checkout.lineItems.map(item=>
                    <Row key={item.id}>
                        <Col>
                            <Div bgImg={item.variant.image.src} bgSize="cover" bgPos="center center" h="5rem" w="8rem" />
                            <br></br>
                        </Col>
                        <Col>
                            <Text>{item.title}</Text>
                            <Text>{item.variant.title}</Text>
                            <Text>{item.quantity}</Text>
                        </Col>
                        <Col>
                            <Text>{item.variant.price}</Text>
                        </Col>
                    </Row>
                )}
                <Anchor href={checkout.webUrl} target="_blank" >Checkout</Anchor>
           </Div>
        </SideDrawer>
    )
}

export default Cart
