function ItemsWrapper({ children }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mr-0 lg:mr-8">
      {children}
    </div>
  );
}

export default ItemsWrapper;
