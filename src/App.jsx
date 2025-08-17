import Heading from './components/Heading';
import data from './assets/data.json';
import Item from './components/Item';
import ItemsWrapper from './components/ItemsWrapper';

function App() {
  return (
    <main className="h-screen p-15 bg-[var(--Rose-50)] overflow-y-auto">
      <Heading cssClasses={'text-4xl font-bold mb-5'} />
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
    </main>
  );
}

export default App;
