import { all } from "redux-saga/effects";
import { watchAsyncArt } from "./artSaga";
import { watchAsyncUser } from "./userSaga";
import { watchAsyncCategorySaga } from "./categorySaga";
import { watchAsyncServiceSaga } from "./serviceSaga";
import { watchAsyncChat } from "./chatSaga";
import { watchAsyncOrder } from "./orderSaga";

export function* rootSaga() {
  yield all([
    watchAsyncArt(),
    watchAsyncUser(),
    watchAsyncCategorySaga(),
    watchAsyncServiceSaga(),
    watchAsyncChat(),
    watchAsyncOrder(),
  ]);
}
