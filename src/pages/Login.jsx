import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "./../assets/Images/login.svg";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {
  const { signInUser, user, signInUserWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  if (user) {
    return navigate("/");
  }

  const loginHandle = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        const user = { email: result.user.email };
        navigate(from, { replace: true });
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: "Something Went Wrong, Try Again. Please Check Email and Password",
          icon: "error",
        });
      });
  };

  const googleSignInHandle = () => {
    signInUserWithGoogle()
      .then((result) => {
        const user = { email: result.user.email };
        navigate(from, { replace: true });
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: "Something Went Wrong, Try Again. Please Check Email and Password",
          icon: "error",
        });
      });
  };

  return (
    <div className="container mx-auto">
      {/* Login Form */}
      <div className="sm:flex flex-col md:flex-row justify-between my-20">
        <div className="bg-blue-600 w-1/2 text-white rounded-xl mr-10">
          <img src={loginImg} className="w-1/2 mx-auto my-auto h-full" alt="" />
        </div>
        <div className="w-1/2 my-10">
          <div className="text-blue-600 font-bold text-4xl text-center mb-10">
            <h1>Welcome Back</h1>
          </div>
          <div className="">
            <form onSubmit={loginHandle} action="">
              <label className="input input-bordered flex items-center gap-2 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  name="email"
                  type="text"
                  className="grow"
                  placeholder="Email"
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow"
                  placeholder="password"
                  name="password"
                />
              </label>
              <button
                type="submit"
                className="btn w-full mt-4 text-center mx-auto"
              >
                Login
              </button>
            </form>
            <h1 className="text-center my-2 font-semibold text-sm">or</h1>
            <button
              type="submit"
              className="btn w-full text-center mx-auto"
              onClick={googleSignInHandle}
            >
              <FcGoogle className="text-xl" />
              Sign In with Google
            </button>
            <h1 className="text-center mt-4 font-light">
              Don't have an account?{" "}
              <Link className="text-blue-600 font-bold" to={"/register"}>
                Sign Up
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
