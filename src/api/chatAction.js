import axios from "axios";

export const createChatAction = async (payload) => {
  const response = await axios.post(
    `${import.meta.env.VITE_APP_BASE_URL}/chat/createChat`,
    payload.body
  );

  return response;
};

export const getChatAction = async (payload) => {
  const response = await axios.get(
    `${import.meta.env.VITE_APP_BASE_URL}/chat/getChats/${payload.sender}/${
      payload.receiver
    }`
  );

  return response;
};

export const updateChatAction = async (payload) => {
  const response = await axios.patch(
    `${import.meta.env.VITE_APP_BASE_URL}/chat/updateChat?id=${payload.id}`,
    payload.body
  );

  return response;
}