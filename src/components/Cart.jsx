import Heading from './Heading';
import emptyCartImage from '../assets/images/illustration-empty-cart.svg';
import { useContext } from 'react';
import CartContext from '../context/cartContext';

function Cart() {
  const { items } = useContext(CartContext);

  let count = items.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity;
  }, 0);

  let noItemsSelected = (
    <div className="flex items-center justify-center flex-col">
      <img src={emptyCartImage} alt="empty cart image" className="mb-5" />
      <p>Your added items will appear here</p>
    </div>
  );

  return (
    <div className="bg-white rounded-2xl p-7 h-fit">
      <Heading cssClasses={'font-bold text-2xl text-(--Red) mb-10'}>
        Your Cart ({count})
      </Heading>
      {count >= 1 ? <ul></ul> : noItemsSelected}
    </div>
  );
}

export default Cart;
