import React, { createContext, useState, useEffect } from "react";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";

export const UserContext = createContext({
  userId: "",
});

const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(true);

  const axiosPrivate = useAxiosPrivate();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosPrivate.get("/api/v1/users/userId");
        setUserId(response.data.data);
        // console.log(response.data.data);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [axiosPrivate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <UserContext.Provider value={userId}>{children}</UserContext.Provider>;
};

export default UserProvider;
