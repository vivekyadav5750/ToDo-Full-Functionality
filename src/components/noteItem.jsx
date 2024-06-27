import { todosSelector } from "../redux/Todo/ToDoReducer";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "./itemCard";
import { fetchTodos } from "../redux/Todo/ToDoReducer";
import { useEffect } from "react";

export default function NoteItem() {
  const { todos, searchText } = useSelector(todosSelector);
  console.log(todos);
  console.log(searchText);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  

  return (
    <div className="w-2/3 min-h-80 bg-gray-400 shadow-md rounded-md p-4 ">
      {todos.map((todo, index) => {
        return <ItemCard key={todo.id} index={index} todo={todo} />;
      })}
    </div>
  );
}
