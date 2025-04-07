import { getAllProducts, getAllProductsWithfilteration } from "@/lib/products";
import { IProductsFilterationSlice, IProductsSliceState } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState: IProductsSliceState = {
    loading: false,
    error: null,
    products: [],
}

export const getProducts = createAsyncThunk("products/getProducts", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const products = await getAllProducts();
        return products;
    } catch (error) {
        return rejectWithValue("Something went wrong while fetching products")
    }
})

export const getProductsWithFilteration = createAsyncThunk("products/getProductsWithFilteration", async ({
    category,
    fromPrice,
    toPrice,
    keyword,
    sortBy
}: IProductsFilterationSlice, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const products = await getAllProductsWithfilteration(category, fromPrice, toPrice, keyword, sortBy);
        return products;
    } catch (error) {
        return rejectWithValue("Something went wrong while fetching products")
    }
})

const productsSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        //Get all products
        builder.addCase(getProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.products = [];
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.products = action.payload;
        });
        builder.addCase(getProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
            state.products = [];
        });

        //Get products with filteration
        builder.addCase(getProductsWithFilteration.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.products = [];
        });
        builder.addCase(getProductsWithFilteration.fulfilled, (state, action) => {  
            state.loading = false;
            state.error = null;
            state.products = action.payload;
        });
        builder.addCase(getProductsWithFilteration.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
            state.products = [];
        });
    },
    reducers: {}
})

export default productsSlice.reducer;