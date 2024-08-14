import React, { useContext, useEffect } from "react";
import { UserContext } from "../store/UserProvider";

const Practice = () => {
  const userId = useContext(UserContext);
  useEffect(() => {
    if (!userId) {
      console.log("there is no userId");
    } else {
      console.log(userId);
    }
  }, []);
  return <div></div>;
};

export default Practice;
