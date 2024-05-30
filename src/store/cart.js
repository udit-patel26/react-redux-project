import { createSlice } from "@reduxjs/toolkit";

const addToCart =createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantity:0,
    },
    reducers: {
        addItemToCart(state,action){
            const newItem= action.payload;
            const existingItem = state.items.find((item)=>item.itemId === newItem.id)
            state.totalQuantity++;
            if(!existingItem){
               state.items.push({
                    itemId:newItem.id,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price,
                 
                    name:newItem.title
                })
            }else{
                existingItem.quantity= existingItem.quantity+1;
                existingItem.totalPrice=newItem.price+existingItem.totalPrice
            }
        },
        removeItemFromCart(state,action){
            const id = action.payload;
            const existingItem= state.items.find((item)=>item.itemId === id)
            state.totalQuantity--;
            if(existingItem===1){
                state.items= state.items.filter((item)=>item.itemId!==id)

            }
            else{
                existingItem.quantity--;
                // existingItem.totalPrice= existingItem.totalPrice - existingItem.price
            }

        }

    }
})

export const addToCartActions = addToCart.actions;


export default addToCart.reducer