import { getAllProducts, getAllProductsWithfilteration, removeProduct } from "@/lib/products";
import { IProductsFilterationSlice, IProductsSliceState } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState: IProductsSliceState = {
    loading: false,
    error: null,
    products: [],
    length: 0,
}

export const getProducts = createAsyncThunk("products/getProducts", async ({
    category,
    fromPrice,
    toPrice,
    keyword}: IProductsFilterationSlice, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const products = await getAllProducts(category, fromPrice, toPrice, keyword);
        return products;
    } catch (error) {        
        return rejectWithValue(error || "Something went wrong while fetching products")
    }
})

export const getProductsWithFilteration = createAsyncThunk("products/getProductsWithFilteration", async ({
    category,
    fromPrice,
    toPrice,
    keyword,
    sortBy,
    page,
    limit,
}: IProductsFilterationSlice, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const products = await getAllProductsWithfilteration(category, fromPrice, toPrice, keyword, sortBy, page, limit);
        return products;
    } catch (error) {
        return rejectWithValue(error || "Something went wrong while fetching products")
    }
})

export const removeProductwithId = createAsyncThunk("products/removeProductwithId", async ({productId}: {productId: string}, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        await removeProduct(productId);
        const products = await getAllProducts();
        return {
            productId,
            length: products.length,
        };
    } catch (error) {
        return rejectWithValue(error || "Something went wrong while fetching products")
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

        //Remove product with id
        builder.addCase(removeProductwithId.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(removeProductwithId.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.products = state.products.filter((product) => product._id !== action.payload.productId);
            state.length = action.payload.length;
        });
        builder.addCase(removeProductwithId.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    },
    reducers: {}
})

export default productsSlice.reducer;