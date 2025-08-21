import Heading from './Heading';
import emptyCartImage from '../assets/images/illustration-empty-cart.svg';
import carbonIcon from '../assets/images/icon-carbon-neutral.svg';
import { useContext, useMemo, useState } from 'react';
import CartContext from '../context/CartContext';
import CartItem from './CartItem';
import { formatPrice } from '../utils/format';

function Cart() {
  const { items, clearCart } = useContext(CartContext);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const count = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  const noItemsSelected = (
    <div className="flex items-center justify-center flex-col">
      <img src={emptyCartImage} alt="empty cart image" className="mb-5" />
      <p>Your added items will appear here</p>
    </div>
  );

  return (
    <div className="bg-white rounded-2xl p-7 h-fit">
      <Heading cssClasses={'font-bold text-2xl text-[var(--Red)] mb-6'}>
        Your Cart ({count})
      </Heading>
      {count >= 1 ? (
        <>
          <ul className="mb-6">
            {items.map((item) => (
              <CartItem
                key={item.name}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
              />
            ))}
          </ul>

          <div className="flex items-center justify-between mb-6">
            <span className="text-[var(--Rose-500)]">Order Total</span>
            <span className="text-2xl font-bold">{formatPrice(total)}</span>
          </div>

          <div className="bg-[var(--Rose-50)] rounded-lg p-4 flex items-center gap-3 mb-6">
            <img src={carbonIcon} alt="carbon neutral" />
            <p className="text-sm">
              This is a <span className="font-semibold">carbon-neutral</span>{' '}
              delivery
            </p>
          </div>

          <button
            className="w-full py-3 rounded-full bg-[var(--Red)] text-white font-semibold cursor-pointer"
            onMouseUp={() => setIsConfirmOpen(true)}
          >
            Confirm Order
          </button>

          {isConfirmOpen && (
            <div className="fixed inset-0 bg-black/50 flex items-end md:items-center justify-center p-0 md:p-4">
              <div className="bg-white w-full md:w-[480px] rounded-t-2xl md:rounded-2xl p-6">
                <Heading cssClasses={'text-2xl font-bold mb-2'}>
                  Order Confirmed
                </Heading>
                <p className="text-[var(--Rose-500)] mb-4">
                  We hope you enjoy your food!
                </p>
                <div className="bg-[var(--Rose-50)] rounded-lg p-4 mb-4 max-h-60 overflow-auto">
                  <ul>
                    {items.map((item) => (
                      <CartItem
                        key={item.name}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                      />
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-[var(--Rose-500)]">Order Total</span>
                    <span className="text-xl font-bold">
                      {formatPrice(total)}
                    </span>
                  </div>
                </div>
                <button
                  className="w-full py-3 rounded-full bg-[var(--Red)] text-white font-semibold cursor-pointer"
                  onMouseUp={() => {
                    setIsConfirmOpen(false);
                    clearCart();
                  }}
                >
                  Start New Order
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        noItemsSelected
      )}
    </div>
  );
}

export default Cart;
