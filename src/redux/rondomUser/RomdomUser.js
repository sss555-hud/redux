import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

let API = "https://randomuser.me/api?results=30";

export const rondomUser = createAsyncThunk(
    "user/fetchRandom", 
    async (_, thunkAPI) => {
        try {
            const res = await axios.get(API); 
            console.log(res.data);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const userSlice = createSlice({
    name: "rondom",
    initialState: {
        country: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(rondomUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(rondomUser.fulfilled, (state, action) => {
                state.loading = false;
                state.country = action.payload.results;
            })
            .addCase(rondomUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export default userSlice.reducer;
