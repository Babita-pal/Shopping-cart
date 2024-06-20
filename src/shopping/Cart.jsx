import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import CartCard from "./cartCard";

function Cart(){
    const{shopping:{cart}}= useContext(CartContext);
     const cartCard=cart.map((item)=>{
        return <CartCard key={item.id} item={item}/>

     })

    return (
        <section className="grid grid-cols-3 m-2 p-2 gap-4">
            {cartCard}
        </section>
        
    )

}
export default Cart; 