import Tweets from "./Tweets";

const Profile = () => {
  return (
    <>
      <div class="container mx-auto h-64 bg-gray-100 mt-11">
        <img
          src="https://images.pexels.com/photos/5750777/pexels-photo-5750777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-full h-full border-4 border-black"
        />
        <img
          src="https://images.pexels.com/photos/20877343/pexels-photo-20877343/free-photo-of-smiling-mother-and-son-hugging.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Full Circle"
          class="w-64 h-64 rounded-full border-4 border-black  absolute bottom-44 ml-6"
        />
        <div className="text-white ml-72">
          <h3 className="text-2xl font-bold">Ayesha Noor</h3>
          <h6 className="text-base">www.ayeshapyari123@gmail.com</h6>
          <h6 className="text-base">
            Subscriber<span>36</span> , Subscribed <span>28</span>
          </h6>
        </div>
        <div class="flex justify-around bg-gray-600 p-4 rounded-lg mt-24">
          <button class=" text-white py-2 px-4 rounded hover:bg-gray-700">
            Videos
          </button>
          <button class=" text-white py-2 px-4 rounded hover:bg-gray-700">
            Playlist
          </button>
          <button class=" text-white py-2 px-4 rounded hover:bg-gray-700">
            Subscribed
          </button>
          <button class=" text-white py-2 px-4 rounded hover:bg-gray-700">
            Tweets
          </button>
        </div>
        <Tweets />
      </div>
    </>
  );
};

export default Profile;
