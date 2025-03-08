import { configureStore } from '@reduxjs/toolkit';
import countReducer from "./counter/countSlice";
import userReducer from "./user/userSlice";
import rondomReducer from "./rondomUser/RomdomUser"
import categoryReducer from "./category/CategorySlice"
import productReducer from "./pro/CategoryProudct"

const myStore = configureStore({
    reducer: {
        count: countReducer,
        user: userReducer,
        rondom: rondomReducer, 
        list: categoryReducer,
        product: productReducer,
    }
});

export default myStore;
