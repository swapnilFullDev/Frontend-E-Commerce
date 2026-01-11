import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000',
  withCredentials: false,
});

/* =======================
   STEP 2: REQUEST INTERCEPTOR
   ======================= */
api.interceptors.request.use(
  (config) => {
    // Client-side only
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/* =======================
   STEP 3: RESPONSE INTERCEPTOR
   ======================= */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("accessToken");

      // redirect to login
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);
