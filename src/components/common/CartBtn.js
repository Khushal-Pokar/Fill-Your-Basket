import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Badge from 'react-bootstrap/Badge';
import { TbShoppingCart } from 'react-icons/tb';
import Button from 'react-bootstrap/Button';

const CartBtn = () => {
    // We get a state of addItems
    // Write the name of the file not the function
    const state = useSelector((state)=> state.handleCart)
    return (
      <>
        <NavLink to="/cart">
          <Button variant="light" className="me-2">
            <TbShoppingCart />
            Cart <Badge bg="secondary">{state.length}</Badge>
          </Button>
        </NavLink>
      </>
    );
}

export default CartBtn