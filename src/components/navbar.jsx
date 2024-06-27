/* eslint-disable react/prop-types */
// import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { VscSignIn, VscSignOut } from "react-icons/vsc";
import { GiShoppingCart } from "react-icons/gi";
import { BsHandbag } from "react-icons/bs";
// import { toast } from "react-toastify";
// import userContext from "../context/user/userContext";
// import authService from "../services/authSevices";

export default function Navbar() {
  //   const { user } = useContext(userContext);
  let user = null;
  //   const handleLogout = async () => {
  //     const { error } = authService.logout();

  //     if (error) {
  //       toast.error("Logout failed!!");
  //       return;
  //     }
  //   };

  return (
    <>
      <nav className="h-20 bg-gray-200 flex px-4 items-center justify-between font-mono pb-4  ">
        <NavLink to="/" className="flex ">
          <h1 className="text-2xl text-customPurple font ml-12 cursor-pointer">
           ToDos
          </h1>
          {user && (
            <h1 className="text-xl text-orange-500 font ml-12 cursor-pointer">
              Welcome {user.email}
            </h1>
          )}
        </NavLink>

        <ul className="flex space-x-8 font-semibold mr-14">
          <NavLink to="/">
            <li className="flex space-x-2 hover:bg-white hover:text-orange-600  rounded-md cursor-pointer">
              <FaHome size={24} className="text-orange-600 " />
              <span className="text-xl text-customPurple"> Home</span>
            </li>
          </NavLink>

          {user && (
            <NavLink to="/myorder">
              <li className="flex space-x-2 hover:bg-white hover:text-orange-600  rounded-md cursor-pointer">
                <BsHandbag size={24} className="text-orange-800 " />
                <span className="text-xl text-customPurple"> My orders</span>
              </li>
            </NavLink>
          )}

          {user && (
            <NavLink to="/cart">
              <li className="flex space-x-2 hover:bg-white hover:text-orange-600  rounded-md cursor-pointer">
                <GiShoppingCart size={25} className="text-orange-800 " />
                <span className="text-xl text-customPurple"> Cart</span>
              </li>
            </NavLink>
          )}

          {!user && (
            <NavLink to="/signIn">
              <li className="flex space-x-2  hover:bg-white hover:text-orange-600  rounded-md cursor-pointer">
                <VscSignIn size={24} className="text-green-800" />
                <span className="text-xl text-customPurple">SignIN</span>
              </li>
            </NavLink>
          )}

          {user && (
            <NavLink to="/signIn">
              <li
                // onClick={handleLogout}
                className="flex space-x-2  hover:bg-white hover:text-orange-600  rounded-md cursor-pointer"
              >
                <VscSignOut size={24} className="text-red-700" />
                <span className="text-xl text-customPurple">Logout</span>
              </li>
            </NavLink>
          )}
        </ul>
      </nav>
    </>
  );
}
