import { createContext, useContext, useReducer } from 'react';
import data from "../Data";
import  CartReducer  from "./CartReducer.jsx";
import PropTypes from 'prop-types';


const Cart = createContext();

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function CartProvider({ children }) {
  let user = JSON.parse(localStorage.getItem('user'));
  
  const initialState = {
    products: data,
    cart: [],
    user: user ? user : null,
  };
  
  // Use the cartReducer to create the context state and dispatch function
  const [state, dispatch] = useReducer(CartReducer, initialState);

  // Return the context Provider with its value set to the state and dispatch function
  return (
    <Cart.Provider value={{ state, dispatch }}>
      {children}
    </Cart.Provider>
  );
}

export default CartProvider; 

// Define the CartState component, which returns the current context state
export const CartState = () => {
    // Use the useContext hook to access the current context state
    return useContext(CartProvider);
  };