import { io } from "socket.io-client";

// const backendURL = import.meta.env.VITE_BACKEND_URL;

const backendURL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5001"
    : "https://creativevalley9.com";

export const socket = io(backendURL, {
  path: "/api/socket.io",
  transports: ["websocket", "polling"],
  withCredentials: true
});
