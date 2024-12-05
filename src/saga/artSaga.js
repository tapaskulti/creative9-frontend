import { toast } from "react-toastify";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  contactUsMailAction,
  createArtAction,
  createArtReviewsAction,
  deleteArtAction,
  getAllArtsAction,
  getArtByIdAction,
} from "../api/artAction";
import {
  getAllArts,
  getArtDetails,
  getArtReviews,
} from "../redux/art/artSlice";
import {
  createArtsReviewsAction,
  getAllArtReviewsAction,
  getArtReviewsByIdAction,
} from "../api/reviewAction";

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
    yield put({
      type: "GET_ALL_ART",
    });

    toast.success("Art deleted");
  }
}

function* createArtReviewSaga(action) {
  const response = yield call(createArtsReviewsAction, action.payload);
}

function* getArtReviewByIdSaga(action) {
  const response = yield call(getAllArtReviewsAction, action.payload);
  console.log(response);
  if (response.status === 200) {
    yield put(
      getArtReviews({
        artReview: response.data,
      })
    );
  }
}

function* createArtReviewsSaga(actions) {
  try {
    const response = yield call(createArtReviewsAction, actions.payload);

    if (response.status === 200) {
      toast.success("Review added");
    }
  } catch (error) {
    toast.error(error.message);
  }
}

function* getArtReviewsByArtIdSaga(action) {
  const response = yield call(getArtReviewsByIdAction, action.payload);

  if (response.status === 200) {
    yield put(
      getArtReviews({
        artReview: response.data,
      })
    );
  }
}

function* contactUsMail(action) {
  console.log(action,"action contactUsMail")
  const response = yield call(contactUsMailAction, action.payload);

  if (response.status === 200) {
    yield put(
      getArtReviews({
        artReview: response.data,
      })
    );
  }
}

export function* watchAsyncArt() {
  yield takeEvery("CREATE_ART", createArtSaga);
  yield takeEvery("GET_ALL_ART", getAllArtSaga);
  yield takeEvery("GET_ART_BY_ID", getArtByIdSaga);
  yield takeEvery("DELETE_ART", deleteArtSaga);
  yield takeEvery("CREATE_REVIEW", createArtReviewSaga);
  yield takeEvery("GET_ART_REVIEW_BY_ID", getArtReviewByIdSaga);
  yield takeEvery("GET_ART_REVIEWS_BY_ART_ID", getArtReviewsByArtIdSaga);
  yield takeEvery("CREATE_ART_REVIEWS", createArtReviewsSaga);
  yield takeEvery("CONTACT_US_MAIL", contactUsMail);
}
