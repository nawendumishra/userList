
import Header from './components/Layout/Header';
import './App.css';
import {  useState} from 'react';
import Meal from "./components/Meals/Meal"
import Cart from './components/Cart/Cart';
import CartProvider from './Store/CartProvider';//
    function App() {
const[cartIsShown,setCartIsShown]=useState(false);

  const ShowCartHandler=()=>{
    setCartIsShown(true);
  }
  const hideCartHandler=()=>{
    setCartIsShown(false);
  }
  
  return (
    <CartProvider>
      {cartIsShown &&<Cart onClose={hideCartHandler}/>}
     <Header onShowCart={ShowCartHandler}/>
      
     <main>
       <Meal/>
     </main>
     
    </CartProvider>
 
 );
  };
   export default App;