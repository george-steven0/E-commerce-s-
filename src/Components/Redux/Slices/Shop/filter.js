import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'Products-Filter',
    initialState : {
        loading : false,
        data : ""
    }
})