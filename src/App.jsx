import Products from "./shopping/Products"
import Header from "./shopping/Header"
import Cart from "./shopping/Cart"
import Login from "./shopping/Login"
import CartContextProvider from "./context/CartContext"
import {useState} from 'react';


function App() {
  const [isCart,setIsCart]=useState(false);
  return (
    <>
    <CartContextProvider>
      <main >
        <Header isCart={isCart} setIsCart = {setIsCart}/>
        {
          isCart ? <Cart/> : <Products/>
        }
        
      </main>
    </CartContextProvider>
   
    {/* <Login/> */}


    </>
  )
}

export default App
