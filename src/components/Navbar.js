import React, {useContext} from 'react';
import {Container, Anchor} from 'atomize';
import {Link} from 'react-router-dom';
import {ShopContext} from '../context/shopContext';

function Navbar() {
    const {openCart} = useContext(ShopContext);
    return (
        <Container d="flex" flexdirection="row" p="2rem" justify="space-between">
            <Link to="/">Shop</Link>
            <Anchor onClick={()=>openCart()}>Cart</Anchor>
        </Container>
    )
}

export default Navbar
