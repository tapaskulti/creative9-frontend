import { configureStore } from "@reduxjs/toolkit";
import CreateSagaMiddleware from "redux-saga";
import { userSliceReducer } from "./user/user";
import { artSliceReducer } from "./art/artSlice";
import { illustrationSliceReducer } from "./illustration/illustration";
import { rootSaga } from "../saga/rootSaga";
import { categorySliceReducer } from "./category/categorySlice";
import { chatSliceReducer } from "./chat/chat";
import { orderSliceReducer } from "./order/order";
import { cartReducer } from "./cart/cartSlice";

const sagaMiddleware = CreateSagaMiddleware();

const middleware = [sagaMiddleware];

const store = new configureStore({
  reducer: {
    user: userSliceReducer,
    art: artSliceReducer,
    illustration: illustrationSliceReducer,
    category: categorySliceReducer,
    chat: chatSliceReducer,
    order: orderSliceReducer,
    cart: cartReducer,
  },
  middleware,
});

sagaMiddleware.run(rootSaga);

export default store;
