import { toast } from "react-toastify";
import { takeEvery, put, call } from "redux-saga/effects";
import {
  createCategoryAction,
  createNewPortfolioAction,
  deleteCategoryAction,
  deletePortfolioAction,
  getAllCategoryAction,
  getPortfolioByCategoryAction,
  
} from "../api/categoryAction";
import { getAllCategory, getPortfolios } from "../redux/category/categorySlice";

function* categoryCreateSaga(action) {
  try {
    toast.loading("Creating Category");
    const response = yield call(createCategoryAction, action.payload);

    if (response.status === 200) {
      toast.dismiss();
      toast.success("Category created successfully");
      yield put({
        type: "GET_ALL_CATEGORY",
      });
    }
  } catch (error) {
    toast.error(error);
  }
}

function* getAllCategorySaga() {
  try {
    const response = yield call(getAllCategoryAction);

    if (response.status === 200) {
      yield put(
        getAllCategory({
          categories: response.data,
        })
      );
    }
  } catch (error) {
    toast.error(error);
  }
}

function* deleteCategorySaga(action) {
  try {
    toast.loading("Deleting Category");
    const response = yield call(deleteCategoryAction, action.payload);

    if (response.status === 200) {
      toast.dismiss();
      toast.success("Category deleted successfully");
      yield put({
        type: "GET_ALL_CATEGORY",
      });
    }
  } catch (error) {
    toast.error(error);
  }
}

function* createprofolioSaga(action) {
  try {
      toast.loading("Creating Portfolio")
      const response = yield call(createNewPortfolioAction,action.payload)
      if (response.status === 200) {
        toast.dismiss()
        toast.success("Portfolio created successfully")
        yield put({
          type:"GET_PORTFOLIO_BY_CATEGORY",
          payload:{
            categoryId:action.payload.body.categoryId
          }
        })
      }
  } catch (error) {
    toast.error(error)
  }
}

function* getPortfolioByCategorySaga(action) {
  try {
    console.log("calling portfolio")
    const response = yield call(getPortfolioByCategoryAction,action.payload)
    console.log(response,"response")
    if (response.status === 200) {
      yield put(
        getPortfolios({
          portfolios: response.data,
        })
      );
    }
  } catch (error) {
    console.log(error)
  }
}

function* deletePortfolioSaga(action) {
  try {
    toast.loading("Deleting Portfolio")
    const response = yield call(deletePortfolioAction,action.payload)
    if (response.status === 200) {
      toast.dismiss()
      toast.success("Portfolio deleted successfully")
      yield put({
        type:"GET_PORTFOLIO_BY_CATEGORY",
        payload:{
          categoryId:action.payload.categoryId
        }
      })
    }
  } catch (error) {
    toast.error(error)
  }
}



export function* watchAsyncCategorySaga() {
  yield takeEvery("CREATE_CATEGORY", categoryCreateSaga);
  yield takeEvery("GET_ALL_CATEGORY", getAllCategorySaga);
  yield takeEvery("DELETE_CATEGORY", deleteCategorySaga);
  yield takeEvery("CREATEPORTFOLIO",createprofolioSaga)
  yield takeEvery("GET_PORTFOLIO_BY_CATEGORY",getPortfolioByCategorySaga)
  yield takeEvery("DELETE_PORTFOLIO",deletePortfolioSaga)
}
