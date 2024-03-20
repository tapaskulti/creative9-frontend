import { call, takeEvery, put } from "redux-saga/effects";
import { createChatAction, getChatAction, updateChatAction } from "../api/chatAction";
import { toast } from "react-toastify";
import { getMessages } from "../redux/chat/chat";

function* createChatSaga(action) {
  try {
    yield call(createChatAction, action.payload);
  } catch (error) {
    toast.error(error.response.data.message);
  }
}

function* getChatsSaga(action) {
  try {
    const response = yield call(getChatAction, action.payload);
    console.log(response.data?.chats, "response.data");
    yield put(getMessages({ messages: response.data.chats }));
  } catch (error) {
    toast.error(error.response.data.message);
  }
}

function* updateChatSaga(action) {
  try {
    yield call(updateChatAction, action.payload);
  } catch (error) {
    toast.error(error.response.data.message);
  }
}

export function* watchAsyncChat() {
  yield takeEvery("CREATE_CHAT", createChatSaga);
  yield takeEvery("GET_CHAT", getChatsSaga);
  yield takeEvery("UPDATE_CHAT", updateChatSaga);
}
