import axios from "axios";

export const createArtsReviewsAction = async (payload) => {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_BASE_URL}/artReview/creatArtReview`,
      payload.body,
    );
  
    return response;
  };

  export const getAllArtReviewsAction = async (payload) => {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_BASE_URL}/artReview/getAllReviewByArtId?artId=${payload.artId}`
    );
  
    return response;
  };