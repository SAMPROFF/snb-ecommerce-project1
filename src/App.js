import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './PagesFolder/Home.jsx';
import Cart from './PagesFolder/Cart.jsx';
import Register from './PagesFolder/Register.jsx';
// import Navbar from './components/Navbar.jsx';
import ProductInfo from './PagesFolder/ProductInfo.jsx';
import Login from './PagesFolder/Login.jsx';
// import CartContext from './ContextFolder/CartContext.jsx';
import CartProvider from './ContextFolder/CartContext.jsx';


function App() {
  return (
    <CartProvider>
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product/:id' element={<ProductInfo/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      <ToastContainer/>
    </Router>
    </CartProvider>
  );
}export default App;
