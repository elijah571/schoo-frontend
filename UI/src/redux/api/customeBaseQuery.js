import axios from "axios";
import { BASE_URL } from "../../config/baseUrl";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // Include cookies for authentication
  headers: {
    "Content-Type": "application/json",
  },
});

// Custom Base Query using Axios
const customBaseQuery = async ({ url, method, data, params }) => {
  try {
    const result = await axiosInstance({
      url,
      method,
      data,
      params,
    });
    return { data: result.data };
  } catch (axiosError) {
    let err = axiosError;
    return {
      error: {
        status: err.response?.status,
        data: err.response?.data || err.message,
      },
    };
  }
};

export default customBaseQuery;
