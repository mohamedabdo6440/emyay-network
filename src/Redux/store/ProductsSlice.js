import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

//get data from api
export const getAllProducts = createAsyncThunk('products/getAllProducts', async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await fetch('http://localhost:3005/AllProducts');
        const data = await res.json();
        return data;

    } catch (error) {
        return rejectWithValue(error.message);
    }
});

//insert data into api
export const insertProduct = createAsyncThunk('products/insertProduct', async (AddProduct, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await fetch('http://localhost:3005/AllProducts', {
            method: 'POST',
            body: JSON.stringify(AddProduct),
            headers: { 'Content-Type': 'application/json;charset=UTF-8', },
        });

        const data = await res.json();
        return data;

    } catch (error) {
        return rejectWithValue(error.message)
    }
});

const ProductsSlice = createSlice({
    name: 'products',
    initialState: {
        Allproducts: [{}],
        isLoading: false,
        error: null,
    },
    extraReducers: {

        //get products
        [getAllProducts.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [getAllProducts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.Allproducts = action.payload;
        },
        [getAllProducts.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        //insert new product
        [insertProduct.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [insertProduct.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.Allproducts.push(action.payload);
        },
        [insertProduct.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

    }

});

export default ProductsSlice.reducer;