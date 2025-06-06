import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import productsReducer from './reducers/products/productsReducer';

const store = configureStore({
    reducer: {
        products: productsReducer,
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;