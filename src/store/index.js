import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./slices/carsSlice";
import cartReducer from "./slices/cartSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    cart: cartReducer,
    user: userReducer
  },
});
