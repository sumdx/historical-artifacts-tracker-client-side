import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const NavBar = () => {
  const {user, signOutUser }= useContext(AuthContext);


  const logOutHandle =() =>{
    signOutUser();
  }

  const menuItems = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
       <NavLink to={"/about"}>About</NavLink>
      </li>
      {
        user &&
        <>
        <li>
            <NavLink to={"/add-artifact"}>Add Artifact</NavLink>
        </li>
        <li>
            <NavLink to={"/all-artifacts"}>All Artifacts</NavLink>
        </li>
        </>
      }
      
    </>
  );
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {menuItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Historical Artifacts Tracker</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ?
            <>
            <h1>User available</h1>
            
            <button onClick={logOutHandle}>Logout</button>
            </>
            
            :
            <>
              <NavLink className='btn mr-4' to={"/login"}>Login</NavLink>
              <NavLink className='btn' to={"/register"}>Register</NavLink>
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default NavBar;
