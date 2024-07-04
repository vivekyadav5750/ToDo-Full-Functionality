import InputBox from "../components/inputBox";
import NoteItem from "../components/noteItem";

import { useSelector } from "react-redux";
import { userSelection } from "../redux/User/UserReducer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Sort from "../components/sort";

export default function Todos() {
  const navigate = useNavigate();
  const { user } = useSelector(userSelection);

  const [sort, setSort] = useState(false); // false used for decreasing order

  useEffect(() => {
    if (!user) {
      navigate("/signIn");
      toast.error("Please login to continue");
    }
  });

  return (
    <div className="w-full flex flex-col bg-gray-100 items-center space-y-4 p-2 pb-8">

      <div className="w-full flex flex-row  ">
        <Sort sort={sort} setSort={setSort} />
        <InputBox />
      </div>
      <NoteItem sort={sort} />
      
    </div>
  );
}
