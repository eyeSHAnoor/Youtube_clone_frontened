import React from "react";
import Modal from "../Modal";
import { useNavigate } from "react-router-dom";

const SignupToLogin = ({ setIsSignUpDone, isSignUpDone }) => {
  const navigate = useNavigate();

  const handleMoveToLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      {/* THIS OPENS NEW TAB OVER PREVIOUS */}
      <Modal isOpen={isSignUpDone} onClose={() => setIsSignUpDone(false)}>
        <div className="text-white">
          <div className="text-2xl">You have SignUp succefully</div>
          <div className="flex justify-between mt-4 gap-2">
            <button
              className="text-center w-full bg-purple-500 rounded-xl p-2"
              onClick={() => setIsSignUpDone(false)}
            >
              {/* IF U WANT TO CLOSE WINDOW */}
              Done
            </button>
            <button
              className="text-center w-full bg-purple-500 rounded-xl"
              onClick={handleMoveToLogin}
            >
              {/* IF U ALSO WANT TO LOGIN AS THAT USER  */}
              LogIn Yourself
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SignupToLogin;
