import { useEffect, useState, useContext } from 'react';
import cartIcon from '../assets/images/icon-add-to-cart.svg';
import { formatPrice } from '../utils/format';
import CartContext from '../context/cartContext';

function Item({ image, name, price, category }) {
  const [width, setWidth] = useState(window.innerWidth);

  const [src, setSrc] = useState(image.desktop);

  const { addItem, removeItem, items } = useContext(CartContext);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (width < 768) {
      setSrc(image.mobile);
    } else if (width < 1024) {
      setSrc(image.tablet);
    } else {
      setSrc(image.desktop);
    }
  }, [width, image]);

  function handleAddItem(name, price) {
    addItem(name, price);
    console.log(items);
  }

  function handleRemoveItem(name) {
    removeItem(name);
  }

  return (
    <div className="w-auto h-auto overflow-hidden">
      <div>
        <img
          src={src}
          alt={name}
          className="object-cover static rounded-[10px]"
        />
        <button
          onMouseUp={() => {
            handleAddItem(name, price);
          }}
          className="mt-2 w-fit rounded-[50px] border bg-white relative bottom-2 left-[50%] -translate-[50%] py-3 px-8 hover:text-(--Red) duration-200 ease-in cursor-pointer"
        >
          <img src={cartIcon} alt="cart icon" className="inline mr-1" /> Add to
          Cart
        </button>
      </div>

      <div className="-mt-5">
        <p className="text-sm text-gray-500">{category}</p>
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-(--Red) font-bold">{formatPrice(price)}</p>
      </div>
    </div>
  );
}

export default Item;
