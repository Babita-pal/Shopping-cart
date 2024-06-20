import { useContext } from "react";
import { CartContext } from "../context/CartContext";


function Header({isCart,setIsCart }){
    const {shopping:{cart}}=useContext(CartContext);
    return(
        <header className="bg-black text-white p-3 sticky">
            <nav className="flex justify-between">
                <h1 className="text-xl">Random Product Website</h1>
                <button onClick={()=>setIsCart(!isCart)}>Cart({cart.length})</button>
            </nav>
        </header>
    )
}
export default Header;