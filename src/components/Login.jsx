import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const userRef = useRef();

  const [isLoading, setIsLoading] = useState(false);

  const { setAuth } = useAuth();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(email, username, password);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/login",
        {
          email,
          username,
          password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const accessToken = response?.data?.data.accessToken;
      const refreshToken = response?.data?.data.refreshToken;
      console.log(accessToken);
      console.log(refreshToken);
      setAuth((prev) => ({
        ...prev,
        accessToken,
        refreshToken,
      }));
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 w-screen">
      <div className="text-center p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-purple-700 md:text-5xl sm:text-2xl font-bold mb-4 italic">
          Play_Videos
        </div>
        {isLoading ? (
          <div>Loading ...</div>
        ) : (
          <>
            <Form method="POST" onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="p-2 rounded-md text-gray-800 mb-4 w-full"
                onChange={(e) => setEmail(e.target.value)}
                ref={userRef}
              />
              <input
                type="text"
                placeholder="Enter Your Username"
                className="p-2 rounded-md text-gray-800 mb-4 w-full"
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter Your password"
                className="p-2 rounded-md text-gray-800 mb-4 w-full"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <div>
                <button
                  type="submit"
                  className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 w-full"
                >
                  Sign In
                </button>
              </div>
            </Form>
            <div className="text-blue-500 p-3 float-end text-lg">
              <Link to="/forgot-password">Forgot Password ?</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
