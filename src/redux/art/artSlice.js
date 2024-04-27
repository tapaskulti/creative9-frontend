import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arts: [],
  artDetail: {},
  artReview:[]
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
  },
});

export const { getAllArts, getArtDetails,getArtReviews } = artSlice.actions;

export const artSliceReducer = artSlice.reducer;
