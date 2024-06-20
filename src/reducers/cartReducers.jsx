export const cartReducer=(state,action)=>{
   switch(action.type){
    case 'add':return{
        ...state,
        cart:[...state.cart,action.product]
    }
    case 'delete':
        const updatedCard=state.card.filter(
            ()=> item.id !== action.id
        )
        return{
            ...state,
            cart:updatedCard
        }
   }
}