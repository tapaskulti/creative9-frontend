import axios from "axios";

export const loginAction = async (payload) => {
  const response = await axios.post(
    `${import.meta.env.VITE_APP_BASE_URL}/user/login`,
    payload.body
  );

  return response;
};

export const accessTokenAction = async (payload) => {
  const response = await axios.get(
    `${import.meta.env.VITE_APP_BASE_URL}/user/accessToken?email=${
      payload.email
    }`
  );

  return response;
};

export const signupAction = async (payload) => {
  const response = await axios.post(
    `${import.meta.env.VITE_APP_BASE_URL}/user/signup`,
    payload.body
  );

  return response;
};

export const getUserDetailsAction = async (payload) => {
  const response = await axios.get(
    `${import.meta.env.VITE_APP_BASE_URL}/user/userDetails?email=${
      payload.email
    }`
  );

  return response;
};

export const logoutAction = async (payload) => {
  const response = await axios.get(
    `${import.meta.env.VITE_APP_BASE_URL}/user/logout?email=${payload.email}`
  );

  return response;
};

export const getUserListAction = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_APP_BASE_URL}/user/userList`
  );

  return response;
};
