import './App.css';
import { useState } from 'react';
import data, { uniqueCategories } from './data'


import ProductList from './ProductList';
import CategoryList from './CategoryList';
import Header from './Header';
import Inventory from './Inventory';

function App() {
  const [category, setCategory] = useState('Toys')
  return (
    <div className="App">

      <Header 
      title="Productify"
      productCount= {data.length} 
      categoryCount={uniqueCategories.length}
      />

      <CategoryList 
        category={category}
        onClick={newCategory => setCategory(newCategory)}
      />

      <ProductList 
        category={category}
      />

      <Inventory />
      
    </div>
  );
}

export default App;
