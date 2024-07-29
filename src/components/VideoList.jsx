import VideoCard from "./VideoCard";

const VideoList = () => {
  const video = {
    thumbnail:
      "https://images.pexels.com/photos/27050027/pexels-photo-27050027/free-photo-of-frame-the-view-of-the-new-mosque-from-karakoy-pier.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "20:45",
    avatar:
      "https://images.pexels.com/photos/20741817/pexels-photo-20741817/free-photo-of-clear-sky-over-cherry-tree-in-spring.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "This is amazing",
    views: "10.3k",
    owner: "CodeMaster",
  };
  return (
    <div className="m-14">
      <VideoCard video={video} />
    </div>
  );
};

export default VideoList;
