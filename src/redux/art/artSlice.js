import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arts: [],
  artDetail: {},
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
  },
});

export const { getAllArts, getArtDetails } = artSlice.actions;

export const artSliceReducer = artSlice.reducer;
