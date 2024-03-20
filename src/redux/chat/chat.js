import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  receiver: undefined,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setMessages: (state, action) => {
      state.messages = [...state.messages, action.payload.message];
    },
    getMessages: (state, action) => {
      state.messages = action.payload.messages;
    },
    setReceiver: (state, action) => {
      state.receiver = action.payload.receiver;
    },
  },
});

export const { setMessages, getMessages, setReceiver } = chatSlice.actions;
export const chatSliceReducer = chatSlice.reducer;
