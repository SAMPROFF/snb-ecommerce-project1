const CartReducer = (state, action) => {
  switch (action.type) {
    // If the action type is ADD_TO_CART, add the payload to the cart array with a quantity of 1
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
   // If the action type is REMOVE_FROM_CART, remove the item with the matching id from the cart array
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    // If the action type is INCREMENT_CART_QTY, increment the quantity of the item with the matching id in the cart array by the payload value
    case 'INCREMENT_CART_QTY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id ? { ...item, qty: item.qty + action.payload.val } : item
        ),
      };
    // If the action type is DECREMENT_CART_QTY, decrement the quantity of the item with the matching id in the cart array by the payload value
    case 'DECREMENT_CART_QTY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id ? { ...item, qty: item.qty - action.payload.val } : item
        ),
      };
    
    // If the action type is SEARCH_PRODUCT, filter the products array to only include items with a title that includes the payload string
    case 'SEARCH_PRODUCT':
      return {
        ...state,
        products: state.products.filter(c =>
          c.title.toLowerCase().includes(action.payload)
        ),
      };
    // If the action type is not recognized, return the current state
    default:
      return state;
  }
};
export default CartReducer;