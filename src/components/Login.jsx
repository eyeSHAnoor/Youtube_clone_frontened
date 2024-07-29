const Login = () => {
  return (
    <div class=" flex items-center justify-center min-h-screen p-6 w-screen">
      <div class="text-center  p-6 rounded-lg shadow-lg max-w-md w-full">
        <div class="text-white md:text-4xl sm:text-2xl font-bold mb-4 italic">
          Play_Videos
        </div>
        <h2 class="text-white text-lg mb-2">Email*</h2>
        <input
          type="email"
          placeholder="Enter Your Email"
          className="p-2 rounded-md text-gray-800 mb-4 w-full"
        />
        <div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full">
            Sign In with Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
