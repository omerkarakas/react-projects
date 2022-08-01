import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { clearCart } from '../features/cartSlice';
import { openModal } from '../features/modalSlice';

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your cart</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>your cart</h2>
      </header>
      <div>
        {cartItems.map((cartItem, index) => {
          return <CartItem key={cartItem.id} {...cartItem} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total && total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
