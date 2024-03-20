import { toast } from "react-toastify";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  createArtAction,
  deleteArtAction,
  getAllArtsAction,
  getArtByIdAction,
} from "../api/artAction";
import { getAllArts, getArtDetails } from "../redux/art/artSlice";

function* createArtSaga(actions) {
  try {
    toast.loading("Creating art");
    const response = yield call(createArtAction, actions.payload);

    if (response.status === 200) {
      toast.dismiss();
      toast.success("Art Created");
      actions.payload.navigate("/Painting");
    }
  } catch (error) {
    toast.error(error.message);
  }
}

function* getAllArtSaga() {
  try {
    const response = yield call(getAllArtsAction);

    if (response.status === 200) {
      yield put(
        getAllArts({
          arts: response.data,
        })
      );
    }
  } catch (error) {
    toast.error(error);
  }
}

function* getArtByIdSaga(action) {
  const response = yield call(getArtByIdAction, action.payload);

  if (response.status == 200) {
    yield put(
      getArtDetails({
        artDetail: response.data,
      })
    );
  }
}

function* deleteArtSaga(action) {
  const response = yield call(deleteArtAction, action.payload);

  if (response.status == 200) {
    yield put(
      {
        type:"GET_ALL_ART"
      }
    );

    toast.success("Art deleted");

  }

  

}

export function* watchAsyncArt() {
  yield takeEvery("CREATE_ART", createArtSaga);
  yield takeEvery("GET_ALL_ART", getAllArtSaga);
  yield takeEvery("GET_ART_BY_ID", getArtByIdSaga);
  yield takeEvery("DELETE_ART", deleteArtSaga);
}
