import { useDispatch, useSelector } from "react-redux";
import ItemCard from "./itemCard";
import { fetchItems } from "../redux/Todo/ToDoReducer";
import { useEffect } from "react";

export default function NoteItem() {
  const { todos } = useSelector(state => state.todo);
  // console.log("todos : ", todos);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("fetchItems");
    dispatch(fetchItems());
  }, [dispatch]);
  

  return (
    <div className="w-2/3 min-h-80 bg-gray-400 shadow-md rounded-md p-4 ">
      {todos.map((todo, index) => {
        console.log("todo c type: ", todo);
        return <ItemCard key={index}  todo={todo} />;
      })}
    </div>
  );
}
