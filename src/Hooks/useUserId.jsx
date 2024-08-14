import React, { useContext } from "react";
import { UserContext } from "../store/UserProvider";

const useUserId = () => {
  return useContext(UserContext);
};

export default useUserId;
