import React, { useContext } from "react";
import registerImg from "./../assets/Images/register.svg";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { AiFillPicture } from "react-icons/ai";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const Register = () => {
  const { signUpUser, signInUserWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const registerHandle = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoUrl = e.target.photoUrl.value;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

      if (!passwordRegex.test(password)) {
        Swal.fire({
          title: "Password Error!",
          text: "Password Must have an Uppercase and Lowercase letter in the password, Length must be at least 6 character",
          icon: "error",
        });
        return;
      }

    signUpUser(email, password)
    .then((result) => {
        
        const profile ={
          displayName : name,
          photoURL : photoUrl,
        }

        updateProfile(auth.currentUser,profile)
        .then((resut)=>{
            navigate("/login");
        })
        .catch((err) => {

        })
      
    })
    .catch((err)=>{
        Swal.fire({
            title: "Error!",
            text: "Registration Failed Please try again.",
            icon: "error",
          });
    })
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
          <img
            src={registerImg}
            className="w-1/2 mx-auto my-auto h-full"
            alt=""
          />
        </div>
        <div className="w-1/2 my-10">
          <div className="text-blue-600 font-bold text-4xl text-center mb-10">
            <h1>Welcome to</h1>
            <h3 className="text-gray-700 mt-4">Historical Artifacts Tracker</h3>
          </div>
          <div className="">
            <form onSubmit={registerHandle} action="">
              <label className="input input-bordered flex items-center gap-2 mb-4">
                <FaCircleUser className="h-4 w-4 opacity-70" />
                <input
                required
                  name="name"
                  type="text"
                  className="grow"
                  placeholder="Name"
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-4">
                <AiFillPicture className="h-4 w-4 opacity-70" />
                <input
                required
                  name="photoUrl"
                  type="text"
                  className="grow"
                  placeholder="Photo URL"
                />
              </label>
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
                required
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
                required
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
                Sign Up
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
              Already have an account?{" "}
              <Link className="text-blue-600 font-bold" to={"/login"}>
                Sign In
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
