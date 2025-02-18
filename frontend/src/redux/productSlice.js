import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
  name: "products",
  initialState: {
    products: []
  },
  reducers: {
    addProd: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    setProd: (state, action) => {
        state.products = [...action.payload];
    },
    deleteProd: (state, action) => {
        state.products = state.products.filter((prod) => prod._id !== action.payload);
  },

    updateProd: (state, action) =>{
        const { id, newProd } = action.payload;
        state.products = state.products.map((prod) =>
            prod._id === id ? newProd : prod
          );
    }
}});

export const { addProd, deleteProd, updateProd, setProd } =
  productSlice.actions;
export default productSlice.reducer;
