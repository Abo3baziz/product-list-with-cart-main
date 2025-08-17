import { useEffect, useState } from 'react';
import cartIcon from '../assets/images/icon-add-to-cart.svg';
import { formatPrice } from '../utils/format';

function Item({ image, name, price, category }) {
  const [width, setWidth] = useState(window.innerWidth);
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

  return (
    <div className="w-auto h-auto overflow-hidden">
      <div>
        <img
          src={src}
          alt={name}
          className="object-cover static rounded-[10px]"
        />
        <button className="mt-2 w-fit rounded-[50px] border border-[var(--Rose-900)] bg-white relative bottom-2 left-[50%] -translate-[50%] py-3 px-8">
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
