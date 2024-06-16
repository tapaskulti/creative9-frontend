import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arts: [],
  artDetail: {},
  artReview:[],
  payingPrice:""
};

const artSlice = createSlice({
  name: "art",
  initialState,
  reducers: {
    getAllArts(state, action) {
      state.arts = action.payload.arts;
    },
    getArtDetails(state, action) {
      state.artDetail = action.payload.artDetail;
    },
    getArtReviews(state, action) {
      state.artReview = action.payload.artReview;
    },
    getPayingPrice(state, action) {
      state.payingPrice = action.payload.payingPrice;
    },
  },
});

export const { getAllArts, getArtDetails,getArtReviews,getPayingPrice } = artSlice.actions;

export const artSliceReducer = artSlice.reducer;
