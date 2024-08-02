import axios from "axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    try {
      // Send refresh token to the backend
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/refresh-token", // Backend endpoint
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Ensures cookies are sent with the request
        }
      );

      // Extract access token and refresh token from the response
      const { accessToken, refreshToken } = response.data.data;

      // Update auth state
      setAuth((prev) => {
        console.log("Previous auth:", prev);
        console.log("New access token:", accessToken);
        return {
          ...prev,
          accessToken: accessToken,
          refreshToken: refreshToken, // Optionally update the refresh token
        };
      });

      return accessToken;
    } catch (err) {
      console.log("Error refreshing token:", err);
      throw err;
    }
  };

  return refresh;
};

export default useRefreshToken;