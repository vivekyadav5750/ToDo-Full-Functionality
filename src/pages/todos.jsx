// import { useState } from "react";
// import SearchBar from "../components/searchbar";
import InputBox from "../components/inputBox";
import NoteItem from "../components/noteItem";

import { useSelector } from "react-redux";
import { userSelection } from "../redux/User/UserReducer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Todos() {
  // const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const { user } = useSelector(userSelection);
  console.log(user);

  useEffect(() => {
    if (!user) {
      navigate("/signIn");
      toast.error("Please login to continue");
    }
  });

  return (
    <div className="w-full flex flex-col bg-gray-500 items-center space-y-4 ">
      <div className="w-full flex float-left">todos</div>
      <InputBox />
      {/* <SearchBar searchText={searchText} setSearchText={setSearchText} /> */}
      <NoteItem />
    </div>
  );
}