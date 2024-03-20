import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adminOrdersPaintings: [],
  adminOrderIllustrations: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    getAdminOrdersPaintings(state, action) {
      state.adminOrdersPaintings = action.payload.adminOrdersPaintings;
    },
    getAdminOrdersIllustrations(state, action) {
      state.adminOrderIllustrations = action.payload.adminOrderIllustrations;
    },
  },
});

export const { getAdminOrdersPaintings, getAdminOrdersIllustrations } =
  orderSlice.actions;
export const orderSliceReducer = orderSlice.reducer;
