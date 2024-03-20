import axios from "axios";

export const createCategoryAction = async (payload) => {
  const response = await axios.post(
    `${import.meta.env.VITE_APP_BASE_URL}/category`,
    payload.body
  );

  return response;
};

export const getAllCategoryAction = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_APP_BASE_URL}/category`
  );

  return response;
};

export const deleteCategoryAction = async (payload) => {
  const response = await axios.delete(
    `${import.meta.env.VITE_APP_BASE_URL}/category/deleteCategory?id=${payload.categoryId}`
  );

  return response;
}

export const createNewPortfolioAction = async (payload) => {
  const response = await axios.post(
    `${import.meta.env.VITE_APP_BASE_URL}/category/createPortfolio`,
    payload.body,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response;
};

export const getPortfolioByCategoryAction = async (payload) => {
  const response = await axios.get(
    `${import.meta.env.VITE_APP_BASE_URL}/category/getPortfolioByCategory?categoryId=${payload.categoryId}`
  );

  return response;
};

export const deletePortfolioAction = async (payload) => {
  const response = await axios.delete(
    `${
      import.meta.env.VITE_APP_BASE_URL
    }/category/deletePortfolio?portfolioId=${payload.portfolioId}`
  );

  return response;
};
