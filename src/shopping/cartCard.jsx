import {CartContext} from "../context/CartContext";
import {useContext} from "react";


function CartCard({item}){
    const {image,product,price}=item;
    const {dispatch} =useContext(CartContext);

    function handleDelete(){
        dispatch({
            type:"delete",
            id: item.id
        })


    }
    return(
        <div>
            <div>
                <img src={image}/>
                <h1>{product}</h1>
                <p>Rs. {price}</p>
            </div>
            <div>
                <h1>Name </h1>
                <p>Price</p>
                <select name="quantity" id="quantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div>
                <button onClick={handleDelete} className="bg-yellow-500 text-white rounded-md p-2">Delete</button>
            </div>
        </div>
    )
}

export default CartCard;