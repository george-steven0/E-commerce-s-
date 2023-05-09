import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { errorToast } from "../Messages/toastMessage";

// const token = localStorage.getItem('token') ? localStorage.getItem('token') : null
const iniCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [] 
const initialState = {
    loading: false,
    cart : iniCart,
    error : null
}
export const CartSlice = createSlice({ 
    name: "Cart-Func", 
    initialState,
    reducers: {
        addToCart:(state,action)=>{
            // console.log(action.payload?.product);
            state.cart.push(action.payload?.product)

            if(state.cart){
                localStorage.setItem('cart',JSON.stringify(state.cart && state.cart))
            }
        },

        removeFromCart:(state,action)=>{
            // console.log(action.payload);
            const newCart =  state?.cart?.filter(item=> item.id !==action.payload?.id)
            state.cart = newCart
            localStorage.setItem('cart',JSON.stringify(state.cart))
        }
    },
    // extraReducers : (builder) =>{
    //     builder.addCase(getAllProducts.pending, (state,action)=>{
    //         state.loading = true;
    //         state.error = ""
    //     }).addCase(getAllProducts.fulfilled, (state,action)=>{
    //         state.loading = false;
    //         state.error = ""
    //         state.products = action.payload.paginationData
    //         state.totalData = action.payload.totalData
    //         state.topSales = action.payload.topSales
    //     }).addCase(getAllProducts.rejected, (state,action)=>{
    //         state.loading = false;
    //         state.error = action.payload
    //     }).addCase(getTopProducts.pending, (state,action)=>{
    //         state.loading = false;
    //         state.error = ""
    //     }).addCase(getTopProducts.fulfilled, (state,action)=>{
    //         state.loading = false;
    //         state.error = ""
    //         state.top = action.payload.top
    //     }).addCase(getTopProducts.rejected, (state,action)=>{
    //         state.loading = false;
    //         state.error = action.payload
    //     })

    // }
});

export const {addToCart,removeFromCart} = CartSlice.actions

export default CartSlice.reducer

