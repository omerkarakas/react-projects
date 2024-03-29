import React from 'react';
import { ChevronDown, ChevronUp, Trash } from '../icons';

import { useDispatch } from 'react-redux';
import { removeItem, increase, decrease } from '../features/cartSlice';

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price each">${price} (each)</h4>
        <h4 className="item-price">${(price * amount).toFixed(2)} </h4>
      </div>

      <div>
        <button className="rem-btn" onClick={() => dispatch(removeItem(id))}>
          <Trash />
        </button>
      </div>

      <div>
        <button className="amount-btn" onClick={() => dispatch(increase(id))}>
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) dispatch(removeItem(id));
            else dispatch(decrease(id));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
