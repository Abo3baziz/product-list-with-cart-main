import removeIcon from '../assets/images/icon-remove-item.svg';
import { useContext } from 'react';
import CartContext from '../context/CartContext';
import { formatPrice } from '../utils/format';

function CartItem({ name, price, quantity }) {
  const { deleteItem } = useContext(CartContext);

  const lineTotal = price * quantity;

  return (
    <li className="flex items-center justify-between py-4 border-b border-[var(--Rose-100)]">
      <div>
        <p className="font-semibold">{name}</p>
        <div className="text-sm text-[var(--Rose-500)]">
          <span className="text-[var(--Red)] font-bold">{quantity}x</span>
          <span className="ml-3">@ {formatPrice(price)}</span>
          <span className="ml-3 font-semibold text-[var(--Rose-900)]">
            {formatPrice(lineTotal)}
          </span>
        </div>
      </div>
      <button
        className="cursor-pointer"
        aria-label={`Remove ${name}`}
        onMouseUp={() => deleteItem(name)}
      >
        <img src={removeIcon} alt="remove" className="w-5 h-5" />
      </button>
    </li>
  );
}

export default CartItem;
