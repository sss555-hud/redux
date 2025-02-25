import { configureStore } from '@reduxjs/toolkit';
import countReducer from "./counter/countSlice";
import userReducer from "./user/userSlice"

const myStore = configureStore({
    reducer: {
        count: countReducer,
        user: userReducer,
    }
})

export default myStore;