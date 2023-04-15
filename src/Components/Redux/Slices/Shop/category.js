import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { errorToast } from "../Messages/toastMessage";

export const getAllCategory = createAsyncThunk('GetAllCategories/Func',async(_,{rejectWithValue,dispatch})=>{
    try{
        const res = await axios.get('https://api.escuelajs.co/api/v1/categories')
        return res.data
    } catch(error){
        if (error.response && error.response.data) {
            dispatch(errorToast(error.response.data.error))
            return rejectWithValue(error.response.data.error)
        }else {
            return rejectWithValue(error.message)
        }
    }

})

export const categorySlice = createSlice({
    name:'CategorySlice',
    initialState :{
        loading:false,
        category : [],
        error:null
    },
    reducers:{},
    extraReducers:(builder=>{
        builder.addCase( getAllCategory.pending,(state,action)=>{
            state.loading = true
            state.error = null
        }).addCase(getAllCategory.fulfilled, (state,action)=>{
            state.loading = false
            state.category = action.payload
            state.error = null
        }).addCase(getAllCategory.rejected, (state,action)=>{
            state.loading = false
            state.error = action.payload
        })
    })
})

// export const {} = categorySlice.actions

export default categorySlice.reducer