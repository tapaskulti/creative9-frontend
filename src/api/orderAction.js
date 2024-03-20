import axios from "axios";

export const createOrderAction = async (payload) => {
  const response = await axios.post(
    `${import.meta.env.VITE_APP_BASE_URL}/order/createOrder`,
    payload.body
  );

  return response;
};

export const showAllOrderPaintingAction = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_APP_BASE_URL}/order/showAllOrderPaintings`
  );

  return response;
};

export const showAllOrderIllustrationAction = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_APP_BASE_URL}/order/showAllOrderIllustrations`
  );

  return response;
};

export const paidArtOrderAction = async (payload) => {
  const response = await axios.patch(
    `${import.meta.env.VITE_APP_BASE_URL}/order/paidArtOrder?id=${payload.id}`
  );

  return response;
}