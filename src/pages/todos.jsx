import InputBox from "../components/inputBox";
import NoteItem from "../components/noteItem";

import { useSelector } from "react-redux";
import { userSelection } from "../redux/User/UserReducer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sort from "../components/sort";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Todos() {
  const navigate = useNavigate();
  const { user, isFetching } = useSelector(userSelection);

  const [sort, setSort] = useState(false); // false used for decreasing order

  useEffect(() => {
    if (!user && !isFetching) {
      navigate("/signIn");
    }
  });

  if (isFetching)
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <AiOutlineLoading3Quarters size={32} className="animate-spin" />
      </div>
    );

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
