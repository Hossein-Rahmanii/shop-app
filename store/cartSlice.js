import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { products: [] },
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.products.find((item) => item.id === action.payload.id);
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    incrementQuantity: (state, action) => {
      console.log(current(state));
      const item = state.products.find((item) => item.id === action.payload);
      item.quantity++;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    decrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        const index = state.products.findIndex((item) => item.id === action.payload);
        state.products.splice(index, 1);
      } else {
        item.quantity--;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const index = state.products.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
    syncState: (state, action) => {
      const data = JSON.parse(localStorage.getItem("cart"));
      // let list = [];
      // list = data;
      // state = data;
      state.products = data.products
      // data.map((item))
      // console.log(action.payload);
      // state.concat(action.payload)
      // console.log(current(state));
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  syncState,
} = cartSlice.actions;
