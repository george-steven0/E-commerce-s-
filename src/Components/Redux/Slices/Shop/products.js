import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { errorToast } from "../Messages/toastMessage";

export const getAllProducts = createAsyncThunk("GetAllProducts", async({textValue,page,}, {rejectWithValue,dispatch})=>{
    // ?offset=0&limit=10
    // console.log(page);
    // console.log(textValue);
    const url = page ? `https://api.escuelajs.co/api/v1/products?offset=${!page ? 0 : ((page-1) * 9)}&limit=9&${textValue? `title=${textValue}`: null}` 
                    : `https://api.escuelajs.co/api/v1/products?offset=0&limit=9&${textValue? `title=${textValue}`: null}`

    // const url2 = `https://api.escuelajs.co/api/v1/products?${page?`offset=${page-1 * 9}&limit=9&${textValue? `title=${textValue}`: null}` : null}`

    try {
        const res = await axios.get(url)
        const res2 = await axios.get('https://api.escuelajs.co/api/v1/products')
        const res3 = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=5')
        return {
            paginationData :res.data,
            totalData : res2.data,
            topSales : res3.data
        }

    } catch(error){
        // console.log(error.response.data);
        if (error.response && error.response.data) {
            dispatch(errorToast(error.response.data.error))
            return rejectWithValue(error.response.data.error)
        } else if(navigator.onLine === false){
            dispatch(errorToast('Check Internet Connection'))
        }
        
        else {
            return rejectWithValue(error.message)
        }
    }
})

export const getTopProducts = createAsyncThunk("GetTopProducts", async(_, {rejectWithValue,dispatch})=>{
    // ?offset=0&limit=10
    const url =`https://api.escuelajs.co/api/v1/products?offset=0&limit=8` 

    try {
        const res = await axios.get(url)
        return {
            top :res.data,
        }

    } catch(error){
        // console.log(error.response.data);
        if (error.response && error.response.data) {
            dispatch(errorToast(error.response.data.error))
            return rejectWithValue(error.response.data.error)
        } else if(navigator.onLine === false){
            dispatch(errorToast('Check Internet Connection'))
        }
        
        else {
            return rejectWithValue(error.message)
        }
    }
})

export const filterProducts = createAsyncThunk('Filter-Products', async()=>{

})

// const token = localStorage.getItem('token') ? localStorage.getItem('token') : null

const initialState = {
    loading: false,
    products: [],
    totalData : [],
    topSales : [],
    top : [],
    error : null
}
export const ProductsSlice = createSlice({ 
    name: "ProductsSlice-Func", 
    initialState,
    reducers: {
    },
    extraReducers : (builder) =>{
        builder.addCase(getAllProducts.pending, (state,action)=>{
            state.loading = true;
            state.error = ""
        }).addCase(getAllProducts.fulfilled, (state,action)=>{
            state.loading = false;
            state.error = ""
            state.products = action.payload.paginationData
            state.totalData = action.payload.totalData
            state.topSales = action.payload.topSales
        }).addCase(getAllProducts.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload
        }).addCase(getTopProducts.pending, (state,action)=>{
            state.loading = false;
            state.error = ""
        }).addCase(getTopProducts.fulfilled, (state,action)=>{
            state.loading = false;
            state.error = ""
            state.top = action.payload.top
        }).addCase(getTopProducts.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload
        })

    }
});

// export const {logout} = ProductsSlice.actions

export default ProductsSlice.reducer

