import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  services: [],
  portfolios:[]
};

const categorySliceSaga = createSlice({
  name: "category",
  initialState,
  reducers: {
    getAllCategory: (state, action) => {
      state.categories = action.payload.categories;
    },
    getAllServices: (state, action) => {
      state.services = action.payload.services;
    },
    getPortfolios:(state,action) => {
      state.portfolios = action.payload.portfolios;
    }
  },
});

export const { getAllCategory, getAllServices,getPortfolios } = categorySliceSaga.actions;

export const categorySliceReducer = categorySliceSaga.reducer;
