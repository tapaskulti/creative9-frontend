import axios from "axios";

export const createArtAction = async (payload) => {
  const response = await axios.post(
    `${import.meta.env.VITE_APP_BASE_URL}/art/createArt`,
    payload.body,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response;
};

export const getAllArtsAction = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_APP_BASE_URL}/art/getAllArt`
  );

  return response;
};

export const getArtByIdAction = async (payload) => {
  const response = await axios.get(
    `${import.meta.env.VITE_APP_BASE_URL}/art/getArt?id=${payload.id}`
  );

  return response;
};

export const deleteArtAction = async (payload) => {
  const response = await axios.delete(
    `${import.meta.env.VITE_APP_BASE_URL}/art/deleteArt?id=${payload.id}`
  );

  return response;
}