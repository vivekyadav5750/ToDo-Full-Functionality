import { useDispatch } from "react-redux";
import googlesignin from "../google-sign-in.jpg";
import { googleLogin } from "../redux/User/UserReducer";

export default function GoogleSignIn() {
  const dispatch = useDispatch();
  function handleGoogleSignIn() {
    console.log("Google Sign In");
    dispatch(googleLogin());
  }

  return (
    <div className="w-full  flex justify-center cursor-pointer ">
      <img
        src={googlesignin}
        alt="google"
        className="w-64 rounded-lg mr-6 hover:shadow-lg"
        onClick={handleGoogleSignIn}
      />
    </div>
  );
}
