import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://api.escuelajs.co/api/v1/categories"
export const getCategory = createAsyncThunk(
    "category",
    async (_, thunkAPI) => {
        try {
            const res = await axios.get(API)

            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.massage)
        }
    }
)

const categorySlice = createSlice({
    name: "category",
    initialState: {
        category: [],
        error: null,
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.category = action.payload;
            })
            .addCase(getCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default categorySlice.reducer;