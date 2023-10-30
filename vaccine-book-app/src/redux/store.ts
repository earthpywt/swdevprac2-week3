import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "./features/cartSlice";
import bookSlice from "./features/bookSlice";
import { useSelector, TypedUseSelectorHook } from "react-redux";
export const store = configureStore({
    reducer: {
        // cartSlice,
        bookSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
