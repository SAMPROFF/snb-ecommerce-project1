/* eslint-disable */
import React from 'react';
import { CartState } from './CartContext';
import SearchBar from '../components/Searchbar';
import CardList from '../components/CardList';

const Home = () => {
  // Retrieve the state from CartState with default values for safety
  const { state: { products = [] } = {} } = CartState() || {};

  // Debugging: Log the state to the console
  console.log('State in Home:', { products });

  // Render the Home component
  return (
    <div className="container">
      {/* Render SearchBar and CardList when components are ready */}
      <SearchBar products={products} />
      <CardList products={products} />
    </div>
  );
};

export default Home;
