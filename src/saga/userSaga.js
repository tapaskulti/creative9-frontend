import { call, takeEvery, put } from "redux-saga/effects";
import {
  accessTokenAction,
  getUserDetailsAction,
  getUserListAction,
  loginAction,
  logoutAction,
  signupAction,
} from "../api/userAction";
import {
  getToken,
  getUserDetails,
  getUserList,
  setLoading,
} from "../redux/user/user";
import { toast } from "react-toastify";

function* signUpSaga(action) {
  try {
    yield put(
      setLoading({
        loading: true,
      })
    );
    const response = yield call(signupAction, action.payload);

    if (response.status === 200) {
      // toast.success("Please check your mail to activate your account");
      toast.success("Account created successfully, please login");
    }
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  } finally {
    yield put(
      setLoading({
        loading: false,
      })
    );
  }
}

function* loginSaga(action) {
  try {
    yield put(
      setLoading({
        loading: true,
      })
    );
    const response = yield call(loginAction, action.payload);
console.log("Login Response>>>>>>>>>>>>>>>>>>>>>>>>>>>", response)
    if (response.status === 200) {
      yield put({
        type: "ACCESS_TOKEN",
        payload: {
          email: action.payload.body.email,
        },
      });
    }
  } catch (error) {
    console.log("error===================>>>>", error)
    toast.error(error?.response?.data?.msg);
  } finally {
    yield put(
      setLoading({
        loading: false,
      })
    );
  }
}

function* accessTokenSaga(action) {
  try {
    const resopnse = yield call(accessTokenAction, action.payload);
console.log("accessTokenSaga===>", action.payload)
    if (resopnse.status === 200) {
      localStorage.setItem("email", action.payload.email);
      yield put(
        getToken({
          token: resopnse?.data?.accessToken,
        })
      );
    }
  } catch (error) {
    console.log("accessTokenSaga===========>>>>",error);
  }
}

function* userDetailsSaga(action) {
  try {
    const response = yield call(getUserDetailsAction, action.payload);

    if (response.status === 200) {
      console.log(response.data, "userDetails");
      yield put(
        getUserDetails({
          user: response.data,
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
}

function* logoutSaga(action) {
  try {
    const response = yield call(logoutAction, action.payload);

    if (response.status === 200) {
      localStorage.removeItem("email");
      yield put(
        getToken({
          token: "",
        })
      );
      action.payload.navigate("/login");
    }
  } catch (error) {
    console.log(error);
  }
}

function* getUserListSaga(action) {
  try {
    const response = yield call(getUserListAction, action.payload);
    console.log(response, "response user list");
    if (response.status === 200) {
      yield put(
        getUserList({
          userList: response.data,
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
}

export function* watchAsyncUser() {
  yield takeEvery("SIGNUP", signUpSaga);
  yield takeEvery("LOGIN", loginSaga);
  yield takeEvery("USER_DETAILS", userDetailsSaga);
  yield takeEvery("ACCESS_TOKEN", accessTokenSaga);
  yield takeEvery("LOGOUT", logoutSaga);
  yield takeEvery("USER_LIST", getUserListSaga);
}
