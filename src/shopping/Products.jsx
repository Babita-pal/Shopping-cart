
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Card from './Card';


function Products(){
    const {shopping:{products}} =useContext(CartContext)

        
    const Cards = products.map((product)=>{
       
        return <Card key ={product.id}data={product}/>
    })
    return (
        <section className='grid grid-cols-3 m-2 p-2 gap-5'> 
        {Cards}
        </section>  
    )

}
export default Products;


