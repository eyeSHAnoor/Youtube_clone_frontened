import React from "react";

const useDurationFormat = () => {
  const convertToHHMMSS = (durationInSeconds) => {
    // Ensure duration is a number and round to nearest integer
    const totalSeconds = Math.floor(durationInSeconds);

    // Calculate hours, minutes, and seconds
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    // Format time based on the presence of hours or minutes
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
    } else if (minutes > 0) {
      return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    } else {
      return `${seconds}s`; // Only show seconds if hours and minutes are 0
    }
  };
  return convertToHHMMSS;
};

export default useDurationFormat;
