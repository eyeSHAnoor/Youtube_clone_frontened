const useUploadTime = () => {
  const getTimeDifference = (createdAt) => {
    const now = new Date();
    const createdDate = new Date(createdAt);
    const differenceInMilliseconds = now - createdDate;

    const minutes = Math.floor(differenceInMilliseconds / (1000 * 60));
    const hours = Math.floor(differenceInMilliseconds / (1000 * 60 * 60));
    const days = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(
      differenceInMilliseconds / (1000 * 60 * 60 * 24 * 7)
    );
    const months = Math.floor(
      differenceInMilliseconds / (1000 * 60 * 60 * 24 * 30)
    );
    const years = Math.floor(
      differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365)
    );

    if (years > 0) return `${years} year${years > 1 ? "s" : ""} ago`;
    if (months > 0) return `${months} month${months > 1 ? "s" : ""} ago`;
    if (weeks > 0) return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
    if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    return "Just now";
  };

  return getTimeDifference;
};

export default useUploadTime;
