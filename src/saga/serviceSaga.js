import { toast } from "react-toastify";
import { takeEvery, call, put } from "redux-saga/effects";
import {
  createServiceAction,
  getAllServiceAction,
  getAllServicesOfferAction,
} from "../api/serviceAction";
import { getAllServices } from "../redux/category/categorySlice";
import { getAllIllustrationOffer } from "../redux/illustration/illustration";

function* createServiceSaga(action) {
  try {
    toast.loading("Creating service...");
    const response = yield call(createServiceAction, action.payload);

    if (response.status === 200) {
      toast.dismiss();
      toast.success("Service created");
    }
  } catch (error) {
    toast.error(error);
  }
}

function* getAllServiceSaga(action) {
  try {
    const response = yield call(getAllServiceAction, action.payload);

    if (response.status == 200) {
      yield put(
        getAllServices({
          services: response.data,
        })
      );
    }
  } catch (error) {
    toast.error(error);
  }
}

function* getAllServicesOfferSaga() {
  try {
    const response = yield call(getAllServicesOfferAction);
    if (response.status === 200) {
      yield put(
        getAllIllustrationOffer({
          offerIllustration: response.data,
        })
      );
    }
  } catch (error) {
    toast.error(error);
  }
}

export function* watchAsyncServiceSaga() {
  yield takeEvery("CREATE_SERVICE_SAGA", createServiceSaga);
  yield takeEvery("GET_ALL_SERVICES", getAllServiceSaga);
  yield takeEvery("GET_ALL_SERVICES_OFFER", getAllServicesOfferSaga);
}
