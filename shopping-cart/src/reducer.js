const reducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
        amount: 0,
        total: 0,
      };
    case 'REMOVE':
      return {
        ...state,
        cart: state.cart.filter((cart) => cart.id !== action.payload),
      };
    case 'INCREASE': {
      let newCart = state.cart.map((item, index) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return {
        ...state,
        cart: newCart,
      };
    }
    case 'DECREASE': {
      let newCart = state.cart
        .map((item, index) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item, index) => item.amount > 0);
      return {
        ...state,
        cart: newCart,
      };
    }
    case 'GET_TOTALS': {
      let { total, amount } = state.cart.reduce(
        (cartTotal, item) => {
          const { price, amount } = item;
          cartTotal.amount += amount;
          cartTotal.total += amount * price;
          return cartTotal;
        },
        { total: 0, amount: 0 }
      );
      total = parseFloat(total.toFixed(2));

      return {
        ...state,
        total,
        amount,
      };
    }
    case 'LOADING': {
      return {
        ...state,
        loading: true,
      };
    }

    case 'DISPLAY_ITEMS': {
      return {
        ...state,
        loading: false,
        cart: action.payload,
      };
    }
  }
  throw new Error('No matching action type');
};

export default reducer;
