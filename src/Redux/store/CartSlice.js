import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'





//get cart data from api
export const getAllCarts = createAsyncThunk('carts/getAllCarts', async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await fetch('http://localhost:3005/cart');
        const data = await res.json();
        return data;



    } catch (error) {
        return rejectWithValue(error.message);
    }
});

//insert data into api
export const insertCart = createAsyncThunk('carts/insertCart', async (AddCart, thunkAPI) => {


    const { rejectWithValue } = thunkAPI;
    try {
        const res = await fetch('http://localhost:3005/cart', {
            method: 'POST',
            body: JSON.stringify(AddCart),
            headers: { 'Content-Type': 'application/json;charset=UTF-8', },
        });

        const data = await res.json();
        return data;

    } catch (error) {
        return rejectWithValue(error.message)
    }
});

export const deleteCarts = createAsyncThunk('carts/deleteCarts', async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await fetch(`http://localhost:3005/cart${id}`, {
            method: 'DELETE',

            headers: { 'Content-Type': 'application/json;charset=UTF-8', },
        });

        console.log(res);
        return res;

    } catch (error) {
        return rejectWithValue(error.message)
    }
});

const CartsSlice = createSlice({
    name: 'carts',
    initialState: {
        AllCarts: [{}],
        isLoading: false,
        error: null,
    },
    extraReducers: {

        //get cart
        [getAllCarts.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [getAllCarts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.AllCarts = action.payload;
        },
        [getAllCarts.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        //insert new cart
        [insertCart.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [insertCart.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.AllCarts.push(action.payload);
        },
        [insertCart.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        //cart delete
        [deleteCarts.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [deleteCarts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.AllCarts.push(action.payload);
        },
        [deleteCarts.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

    }

});



export default CartsSlice.reducer;