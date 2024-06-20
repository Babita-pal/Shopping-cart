import { CartContext } from "../context/CartContext";
import { useContext } from "react";


function Card({ data}){
    const {image,product,description,price}=data
    const {shopping:{cart},dispatch} =useContext(CartContext)


    function  addToCart(){
      if(cart.includes(data))
        return;
      dispatch({
        type:"add",
        product : data
      })
     
    }
  return (<div>
    <div>
        <img src={image} alt=""/>
    </div>
    <div>
        <h3 className="font-bold text-xl">{product}</h3>
        <p>{description}</p>
        <p>Rs. {price}</p>
        <button onClick={addToCart} className="bg-yellow-500 rounded-md p-2">Add to Cart</button>
    </div>
  </div>
  )
}
export default Card;