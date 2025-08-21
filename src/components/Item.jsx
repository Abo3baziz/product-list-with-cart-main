import { useEffect, useState, useContext } from 'react';
import { formatPrice } from '../utils/format';
import ControlButton from './ControlButton';
import AddButton from './AddButton';
import CartContext from '../context/CartContext';

function Item({ image, name, price, category }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [isItemSelected, setIsItemSelected] = useState(false);
  const { items, addItem } = useContext(CartContext);

  const [src, setSrc] = useState(image.desktop);

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

  useEffect(() => {
    const existsInCart = items.some((item) => item.name === name);
    setIsItemSelected(existsInCart);
  }, [items, name]);

  let cssClasses = isItemSelected
    ? 'object-cover static rounded-[10px] border-4 border-[var(--Red)]'
    : 'object-cover static rounded-[10px]';

  function handleAddItem(name, price) {
    addItem(name, price);
    setIsItemSelected(true);
  }

  return (
    <div>
      <div>
        <img src={src} alt={name} className={cssClasses} />
        {isItemSelected ? (
          <ControlButton name={name} />
        ) : (
          <AddButton onAdd={() => handleAddItem(name, price)} />
        )}
      </div>

      <div className="-mt-5">
        <p className="text-sm text-gray-500">{category}</p>
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-[var(--Red)] font-bold">{formatPrice(price)}</p>
      </div>
    </div>
  );
}

export default Item;
