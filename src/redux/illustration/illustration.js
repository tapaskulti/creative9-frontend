import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  illustrations: [],
  illustrationDetail: {},
  offerIllustration: [],
};

const illustrationSlice = createSlice({
  name: "illustration",
  initialState,
  reducers: {
    getAllIllustration(state, action) {
      state.arts = action.payload.arts;
    },
    getIllustrationDetails(state, action) {
      state.artDetail = action.payload.artDetail;
    },
    getAllIllustrationOffer(state, action) {
      state.offerIllustration = action.payload.offerIllustration;
    },
  },
});

export const {
  getAllIllustration,
  getIllustrationDetails,
  getAllIllustrationOffer,
} = illustrationSlice.actions;

export const illustrationSliceReducer = illustrationSlice.reducer;
