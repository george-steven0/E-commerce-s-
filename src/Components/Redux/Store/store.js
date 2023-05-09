import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Slices/Auth/authSlice";
import toastMessage from "../Slices/Messages/toastMessage";
import products from "../Slices/Shop/products";
import category from "../Slices/Shop/category";
import cartSlice from "../Slices/Cart/cartSlice";
const store = configureStore({
    reducer : {
        auth : authSlice,
        toastMessage : toastMessage,
        products : products,
        category : category,
        cart : cartSlice
    }
})

export default store
