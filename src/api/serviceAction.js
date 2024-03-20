import axios from "axios";

export const createServiceAction = async (payload) => {
  const response = await axios.post(
    `${import.meta.env.VITE_APP_BASE_URL}/service?categoryId=${
      payload.categoryId
    }`,
    payload.body
  );

  return response;
};

export const getAllServiceAction = async (payload) => {
  const response = await axios.get(
    `${import.meta.env.VITE_APP_BASE_URL}/service?categoryId=${
      payload.categoryId
    }`
  );

  return response;
};

export const getAllServicesOfferAction = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_APP_BASE_URL}/service/servicesListForOffer`
  );

  return response;
};

