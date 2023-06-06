import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delCart } from "../../redux/action/cartActions";
import { Button } from "react-bootstrap";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delCart(item));
  };

  const cartItems = (cartItem) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4 mt-3">
          <Button
            onClick={() => handleClose(cartItem)}
            variant="outline-dark"
            className="float-end"
          >Remove from Cart</Button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.thumbnail}
                alt={cartItem.title}
                height="200px"
                width="200px"
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="lead fw-bold">
                $
                {(
                  cartItem.price -
                  (cartItem.price * cartItem.discountPercentage) / 100
                ).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4 mt-3 d-flex flex-column align-items-center">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
          <div className="row mt-4">
            <span><NavLink to="/"><Button variant="dark">Go to Home</Button></NavLink></span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
    </>
  );
};

export default Cart;
