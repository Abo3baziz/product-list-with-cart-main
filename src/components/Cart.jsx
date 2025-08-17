import Heading from './Heading';
import emptyCartImage from '../assets/images/illustration-empty-cart.svg';

function Cart() {
  let noItemsSelected = (
    <div className="flex items-center justify-center flex-col">
      <img src={emptyCartImage} alt="empty cart image" className="mb-5" />
      <p>Your added items will appear here</p>
    </div>
  );

  return (
    <div className="bg-white rounded-2xl p-7 h-fit">
      <Heading cssClasses={'font-bold text-2xl text-(--Red) mb-10'}>
        Your Cart (0)
      </Heading>
      {noItemsSelected}
    </div>
  );
}

export default Cart;
