import React, { useState } from 'react';
import './index.css';
import Item from './Components/Item';
import Category from './Components/Category';
import menu from './data';
const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

function App() {
  const [data, setData] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setData(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setData(newItems);
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Our menu</h1>
      <div className="underline"></div>
      <Category categories={categories} filterItems={filterItems}/>
      <section className="grid-container">
        {
          data.map((item) => {
            return (
              <div>
                <Item
                  key={item.id}
                  {...item}
                />
              </div>

            )
          })
        }
      </section>

    </div>
  );
}

export default App;
