import { useContext } from 'react';
import decrementIcon from '../assets/images/icon-decrement-quantity.svg';
import incrementIcon from '../assets/images/icon-increment-quantity.svg';
import CartContext from '../context/cartContext';

function ControlButton({ name, price }) {
  const { addItem, removeItem, items } = useContext(CartContext);

  function handleAddItem(name) {
    addItem(name);
  }

  function handleRemoveItem(name) {
    removeItem(name);
  }

  let count = items.reduce((accumulator, currentValue) => {
    if (currentValue.name === name) {
      if (currentValue.quantity < 1) {
        return 0;
      }
      return accumulator + currentValue.quantity;
    }
    return accumulator;
  }, 1);

  return (
    <div className="bg-(--Red) flex justify-between w-50 py-3 px-3 rounded-[50px] relative left-[50%] -translate-[50%]">
      <button
        className="cursor-pointer"
        onMouseUp={() => {
          handleRemoveItem(name);
        }}
      >
        <img
          src={decrementIcon}
          alt="decrementIcon"
          className="border-2 w-5 h-5 border-white rounded-[50px] py-[7px]"
        />
      </button>
      <p className="text-white">{count}</p>
      <button
        className="cursor-pointer"
        onMouseUp={() => {
          handleAddItem(name, price);
        }}
      >
        <img
          src={incrementIcon}
          alt="incrementIcon"
          className="border-2 w-5 h-5 border-white rounded-[50px] py-[3px]"
        />
      </button>
    </div>
  );
}

export default ControlButton;
