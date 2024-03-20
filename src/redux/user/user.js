import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  userList: [],
  token: "",
  adminView: false,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload.loading;
    },
    getUserList(state, action) {
      state.userList = action.payload.userList;
    },
    getUserDetails(state, action) {
      state.user = action.payload.user;
    },
    getToken(state, action) {
      state.token = action.payload.token;
    },
    setAdminView(state, action) {
      state.adminView = action.payload.adminView;
    },
  },
});

export const {
  getUserDetails,
  getToken,
  getUserList,
  setAdminView,
  setLoading,
} = userSlice.actions;

export const userSliceReducer = userSlice.reducer;
