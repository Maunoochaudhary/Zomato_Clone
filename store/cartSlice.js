import { createSlice } from "@reduxjs/toolkit"

const initialState = {item:[],totaQuantity:0}

const cartSlice = createSlice({
     initialState:initialState,
     reducers:{
          addItemToCart(state,action){
               const newItem = action.payload;
               const exitingItem = state.item.find((item)=>{item.id === newItem.id})
               if(!exitingItem){
                    state.item.push(newItem);
               }

          }
     }
})
