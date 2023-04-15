import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { errorToast } from "../Messages/toastMessage";

export const login = createAsyncThunk("loginFunc", async(values, {rejectWithValue,dispatch})=>{
    try {
        const res = await toast.promise(axios.post('https://reqres.in/api/login',values),
        {
            pending: 'Promise is pending',
            success: 'Login Success 👌',
            // error: 'Promise rejected 🤯'
        },{toastId : "loginToast"}
        )
        // console.log(res.data);
        return res.data

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

// const token = localStorage.getItem('token') ? localStorage.getItem('token') : null

const initialState = {
    loading: false,
    // by creating token like this we make sure token is available even if the page refreshed
    token : localStorage.getItem('token') ? localStorage.getItem('token') : null, 
    error : null
}
export const AuthSlice = createSlice({ 
    name: "authSlice-Func", 
    initialState,
    reducers: {
        logout : (state,action)=>{
            state.loading = false
            state.token = null;
            state.error = null
            localStorage.removeItem('token')
        }
    },
    // extraReducers: {
    //     [login.pending] : (state,action) =>{
    //         state.loading = true;
    //         state.error = ""
    //     },

    //     [login.fulfilled] : (state, action)=>{
    //         state.loading = false;
    //         state.error = ""
    //         state.token = action.payload
    //     },

    //     [login.rejected] : (state, action)=>{
    //         state.loading = false;
    //         state.token = ""
    //         state.error = action.payload
    //     }
    // },

    extraReducers : (builder) =>{
        builder
        .addCase(login.pending, (state,action)=>{
            state.loading = true;
            state.error = ""
        })

        .addCase(login.fulfilled, (state,action)=>{
            state.loading = false;
            state.error = ""
            state.token = action.payload
            localStorage.setItem('token',action.payload.token)
            // console.log(action);
        })

        .addCase(login.rejected, (state,action)=>{
            state.loading = false;
            state.token = ""
            state.error = action.payload
        })

    }
});

export const {logout} = AuthSlice.actions

export default AuthSlice.reducer

