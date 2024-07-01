import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addItem } from "../redux/Todo/ToDoReducer";

export default function InputBox() {
  const [todo, setTodo] = useState({ title: "", completed: false });
  const dispatch = useDispatch();
  const todoData = useRef();

  const handleAddTodo = () => {
    if (!todo.title) {
      toast.error("Please enter a todo");
      return;
    }
    dispatch(addItem(todo));
    todoData.current.value = "";
    setTodo({ ...todo, title: "" });
    toast.success("Todo Added Successfully");
  };

  return (
    <div className="w-3/5   h-32 ">
      <div className="w-10/12 flex flex-col space-y-4 ">
        <input
          className="w-full border-2 h-12 rounded-md"
          ref={todoData}
          onChange={() => setTodo({ ...todo, title: todoData.current.value })}
        />
        <div className="w-full flex justify-end  ">
          <button
            className="w-2/12 p-2 shadow-md text-white hover:bg-white hover:text-black rounded-md  bg-green-500 font-semibold text-xl"
            onClick={() => handleAddTodo()}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
