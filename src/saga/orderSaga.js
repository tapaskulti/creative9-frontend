import { takeEvery, put, call } from "redux-saga/effects";
import {
  createOrderAction,
  paidArtOrderAction,
  showAllOrderIllustrationAction,
  showAllOrderPaintingAction,
} from "../api/orderAction";
import {
  getAdminOrdersIllustrations,
  getAdminOrdersPaintings,
} from "../redux/order/order";
import { toast } from "react-toastify";

function* createOrderSaga(actions) {
  try {
    const response = yield call(createOrderAction, actions.payload);
  
  } catch (error) {
    console.log(error);
  }
}

function* getAllPaintingOrderSaga() {
  try {
    const response = yield call(showAllOrderPaintingAction);

    if (response.status === 200) {
      yield put(
        getAdminOrdersPaintings({
          adminOrdersPaintings: response.data,
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
}

function* getAllIllustrationOrderSaga() {
  try {
    const response = yield call(showAllOrderIllustrationAction);

    if (response.status === 200) {
      yield put(
        getAdminOrdersIllustrations({
          adminOrderIllustrations: response.data,
        })
      );
    }
  } catch (error) {
    toast.error(error);
  }
}

function* paidArtOrderSaga(actions) {
  try {
    const response = yield call(paidArtOrderAction, actions.payload);
    yield put({
      type: "GET_ALL_ADMIN_PAINTINGS",
    
    })
  } catch (error) {
    console.log(error);
  }
}

export function* watchAsyncOrder() {
  yield takeEvery("CREATE_ORDER", createOrderSaga);
  yield takeEvery("GET_ALL_ADMIN_PAINTINGS", getAllPaintingOrderSaga);
  yield takeEvery("GET_ALL_ADMIN_ILLUSTRATION", getAllIllustrationOrderSaga);
  yield takeEvery("PAID_ART_ORDER", paidArtOrderSaga);
}
