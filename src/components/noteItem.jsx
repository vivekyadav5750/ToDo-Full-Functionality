import { useDispatch } from "react-redux";
import ItemCard from "./itemCard";
import { fetchItems } from "../redux/Todo/ToDoReducer";
import { useEffect } from "react";
import useFirestore from "../hooks/useFirestore";

export default function NoteItem() {
  // const { todos } = useSelector(state => state.todo);
  const dispatch = useDispatch();

  const { docs: todos } = useFirestore("todos");
  console.log("docs : ", todos);

  useEffect(() => {
    console.log("fetchItems");
    dispatch(fetchItems());
  }, [dispatch]);
  

  return (
    <div className="w-2/3 min-h-80 bg-gray-400 shadow-md rounded-md p-4 ">
      {todos.map((todo, index) => {
        return <ItemCard key={index}  todo={todo} />;
      })}
    </div>
  );
}
