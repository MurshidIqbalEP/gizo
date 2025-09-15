import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000, // 10s timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Add interceptors for auth / error handling
// api.interceptors.request.use(
//   (config) => {
//     const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       console.error("Unauthorized – maybe redirect to login?");
//     }
//     return Promise.reject(error);
//   }
// );

export default api;
