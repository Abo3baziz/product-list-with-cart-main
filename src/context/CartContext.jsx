import { createContext, useReducer } from 'react';

const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
});

function cartReducer(state, action) {
  if (action.type === 'addItem') {
    const index = state.items.findIndex(
      (item) => item.name === action.payload.name
    );
    if (index !== -1) {
      const updatedItems = [...state.items];
      updatedItems[index] = {
        ...updatedItems[index],
        quantity: updatedItems[index].quantity + 1,
      };
      return { ...state, items: updatedItems };
    }

    return {
      ...state,
      items: [
        ...state.items,
        { name: action.payload.name, price: action.payload.price, quantity: 1 },
      ],
    };
  }

  if (action.type === 'removeItem') {
    const index = state.items.findIndex(
      (item) => item.name === action.payload.name
    );

    if (index === -1) return state;

    const updatedItems = [...state.items];

    if (updatedItems[index].quantity > 1) {
      updatedItems[index] = {
        ...updatedItems[index],
        quantity: updatedItems[index].quantity - 1,
      };
    } else {
      updatedItems.splice(index, 1);
    }

    return { ...state, items: updatedItems };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, {
    items: [],
  });

  function addItem(name, price) {
    dispatch({ type: 'addItem', payload: { name, price } });
  }

  function removeItem(name) {
    dispatch({ type: 'removeItem', payload: { name } });
  }

  const value = {
    items: cart.items,
    addItem,
    removeItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartContext;
