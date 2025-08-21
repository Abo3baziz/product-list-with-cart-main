import Heading from './components/Heading';
import data from './assets/data.json';
import Item from './components/Item';
import ItemsWrapper from './components/ItemsWrapper';
import Cart from './components/Cart';
import { CartContextProvider } from './context/CartContext';

function App() {
  return (
    <CartContextProvider>
      <main className="min-h-screen p-6 md:p-10 bg-[var(--Rose-50)] overflow-y-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="flex flex-col lg:col-span-2">
          <Heading cssClasses={'text-3xl md:text-4xl font-bold mb-5 w-fit'}>
            Desserts
          </Heading>
          <ItemsWrapper>
            {data.map((item, index) => {
              return (
                <Item
                  name={item.name}
                  image={item.image}
                  category={item.category}
                  price={item.price}
                  key={index}
                />
              );
            })}
          </ItemsWrapper>
        </div>
        <Cart />
      </main>
    </CartContextProvider>
  );
}

export default App;
