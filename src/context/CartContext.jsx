// import { useCallback } from "react";
import {faker} from '@faker-js/faker'
import { createContext ,useReducer,useState} from "react";
import { cartReducer } from '../reducers/cartReducers';

export const CartContext = createContext();
function CartContextProvider({children}){
    let products =[];
    for (let i=0; i<10; i++){
        products.push({
            id: faker.database.mongodbObjectId(),
            product : faker.commerce.productName(),
            price : faker.commerce.price(),
            description: faker.commerce.productDescription(),
            image: faker.image.url()
        })
    }




    const [shopping ,dispatch] =useReducer(cartReducer,{
        products,
        cart:[]
    })
    return(
        <CartContext.Provider value ={{shopping,dispatch}}>
            {children}

        </CartContext.Provider>
    )
}
export default CartContextProvider; 