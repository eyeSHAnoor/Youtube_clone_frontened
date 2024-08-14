import React from "react";

const useFormatViews = () => {
  const formatViews = (views) => {
    if (views < 1000) {
      return views; // For values less than 1000, return as is
    } else if (views < 1000000) {
      return `${Math.floor(views / 1000)}k`; // For values between 1000 and 1 million, use 'k'
    } else {
      return `${Math.floor(views / 1000000)}M`; // For values 1 million and above, use 'M'
    }
  };

  return formatViews;
};

export default useFormatViews;
