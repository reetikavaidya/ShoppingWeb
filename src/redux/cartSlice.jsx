import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    products:[],
    totalQuantity:0,
    totalPrice:0,
}

const cartSlice =createSlice ({
    name:'cart',
    initialState,
    reducers:
    {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        addtocart:(state,action)=>{
            const newitem=action.payload;
            const itemIndex=state.products.find((item)=>item.id === newitem.id)
            if(itemIndex){
                itemIndex.quantity++;
                itemIndex.totalPrice+=newitem.price
            }else{
                state.products.push({
                    id:newitem.id,
                    name:newitem.name,
                    price:newitem.price,
                    quantity:1,
                    totalPrice:newitem.price,
                    image:newitem.image

                })
            }
            state.totalPrice+=newitem.price;
            state.totalQuantity++;
       
        },
        removeFromcart:(state,action)=> {
            const id=action.payload;
            const findItem=state.products.find((item)=>item.id === id)
            if(findItem){
                state.totalPrice -= findItem.totalPrice
                state.totalQuantity -= findItem.quantity
                state.products=state.products.filter(item=>item.id !==id)
            }
        },
        handleincrement(state,action){
            const id=action.payload;
            const findItem=state.products.find((item)=>item.id === id)
            if(findItem){
                findItem.quantity++;
                findItem.totalPrice+=findItem.price;
                state.totalQuantity++;
                state.totalPrice+= findItem.price
            }
        },
        handledecrement(state,action){
            const id=action.payload;
            const findItem=state.products.find((item)=>item.id === id)
           if(findItem.quantity>1){
            if(findItem){
                findItem.quantity--;
                findItem.totalPrice-=findItem.price;
                state.totalQuantity--;
                state.totalPrice-= findItem.price
            }
        }
    },
   
        
    },
    
})
export const {setProducts,addtocart,removeFromcart,handleincrement,handledecrement}=cartSlice.actions;
export default cartSlice.reducer