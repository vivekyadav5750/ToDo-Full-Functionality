import { useDispatch, useSelector } from "react-redux";
import { userRegister, userSelection } from "../redux/User/UserReducer";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import GoogleSignIn from "./google-sign-in";

export default function RegisterCard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, error } = useSelector(userSelection);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    dispatch(userRegister(newUser));
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    } else if (error) {
      toast.error("Error : " + error);
    }
  }, [user, error, navigate]);

  return (
    <main className="flex items-center justify-center">
      {/* // register form */}
      <div className="h-96 w-80 mt-20 space-y-4">
        <h1 className="text-5xl font-serif font-black text-customBlue">
          Sign Up
        </h1>
        {/* <h1 className="text-5xl font-sans font-black text-customBlue">
          Sign Up
        </h1> */}
        {/* <h1 className="text-5xl font-mono font-black text-customBlue">Sign Up</h1> */}

        <form className="flex flex-col space-y-4  pt-8" onSubmit={handleSubmit}>
          <input
            className="h-12 w-72 p-3 bg-shadowWhite box-border border-2 border-darkPurple rounded-lg text-lg text-darkPurple font-semibold 
              focus:outline-none focus:border-darkPurple-500 focus:ring-1 focus:ring-darkPurple-500 placeholder:text-lg placeholder:font-normal"
            type="text"
            placeholder="Enter Name"
            required
            autoComplete="off"
            name="name"
          />
          <input
            className="h-12 w-72 p-3 bg-shadowWhite box-border border-2 border-darkPurple rounded-lg text-lg text-darkPurple font-semibold 
              focus:outline-none focus:border-darkPurple-500 focus:ring-1 focus:ring-darkPurple-500 placeholder:text-lg placeholder:font-normal"
            type="email"
            placeholder="Enter Email"
            required
            autoComplete="off"
            name="email"
          />
          <input
            className="h-12 w-72 p-3 bg-shadowWhite box-border border-2 border-darkPurple rounded-lg text-lg text-darkPurple font-semibold 
              focus:outline-none focus:border-darkPurple-500 focus:ring-1 focus:ring-darkPurple-500 placeholder:text-lg placeholder:font-normal"
            type="password"
            placeholder="Enter Password"
            required
            autoComplete="off"
            name="password"
          />
          <button className="h-10 w-72 p-1.5 bg-darkPurple text-lg text-white rounded-md shadow-lg shadow-slate-400 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
            Sign Up
          </button>
        </form>

          <GoogleSignIn />

      </div>

    </main>
  );
}
