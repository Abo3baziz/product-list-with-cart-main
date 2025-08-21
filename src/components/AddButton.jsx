import cartIcon from '../assets/images/icon-add-to-cart.svg';

function AddButton({ onAdd }) {
  return (
    <button
      onMouseDown={onAdd}
      className="mt-2 w-[200px] rounded-[50px] border bg-white relative bottom-2 left-[50%] translate-[-50%] py-3 px-8 hover:text-[var(--Red)] duration-200 ease-in cursor-pointer"
    >
      <img src={cartIcon} alt="cart icon" className="inline mr-1" /> Add to Cart
    </button>
  );
}

export default AddButton;
