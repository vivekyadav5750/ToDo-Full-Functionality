import { useEffect } from "react";
import LoginCard from "../components/loginCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSelection } from "../redux/User/UserReducer";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const { user, error } = useSelector(userSelection);

  useEffect(() => {
    if (user) {
      navigate("/");
    } else if (error) {
      toast.error("Error : " + error);
    }
  }, [user, error, navigate]);
  
  return (
    <>
      <LoginCard />
    </>
  );
}
