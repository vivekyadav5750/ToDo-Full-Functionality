import PropTypes from "prop-types";
import { useState } from "react";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function ItemCard({ index, todo }) {
  const [editMode, setEditMode] = useState(false);
  const [currTitle, setCurrTitle] = useState(todo.title);

  const dispatch = useDispatch();

  const handleCompleted = (index) => {
    dispatch({ type: "TOGGLE_TODO/changeStatus", payload: index });
  };

  const handleDeleteClick = (index) => {
    dispatch({ type: "TOGGLE_TODO/deleteTodo", payload: index });
    toast.error("Todo Deleted Successfully");
  };

//   const handleOnChange = (e) => {
//     setCurrTitle(e.target.value);
//   };

  const handleCancelClick = () => {
    setCurrTitle(todo.title);
    setEditMode(false);
  }

  const handleSaveClick = () => {
    dispatch({ type: "TOGGLE_TODO/editTodo", payload: { index, title: currTitle } });
    setEditMode(false);
  }


  return (
    <div className="w-full h-20 bg-gray-300 flex items-center justify-between p-4 rounded-md shadow-md">
      <div className="w-1/2">
        <h1 className="font-semibold text-xl">
          <input
            value={currTitle}
            readOnly={!editMode}
            // onChange={handleOnChange} 
            onChange={(e) => setCurrTitle(e.target.value)} 
            name="title"
            className={`${
              editMode ? "border-2 " : "border-none bg-transparent"
            } focus:outline-none w-full p-2  `}
          />
        </h1>
      </div>
      <div className="w-1/2 flex items-center justify-around ">
        <div className="w-2/3   flex justify-end">
          {todo.completed ? (
            <button
              className="p-2 bg-green-500 hover:bg-green-400 hover:text-black text-white rounded-md shadow-md"
              onClick={() => handleCompleted(index)}
            >
              Completed
            </button>
          ) : (
            <button
              className="p-2 bg-red-500 hover:bg-red-400 hover:text-black text-white
           rounded-md shadow-md"
              onClick={() => handleCompleted(index)}
            >
              Not Completed
            </button>
          )}
        </div>
        {editMode ? (
          <div className="w-1/3  flex justify-end space-x-4">
            {" "}
            <button
              className="bg-gray-500 text-white px-2 py-1  hover:bg-gray-400 rounded-md"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
            <button
              className="bg-gray-500 text-white px-2 py-1 hover:bg-gray-400 rounded-md"
              onClick={handleSaveClick}
            >
              Save
            </button>{" "}
          </div>
        ) : (
          <div className="w-1/3  flex justify-end space-x-4">
            <MdEdit
              size={24}
              className="text-yellow-600 cursor-pointer"
              onClick={() => setEditMode(!editMode)}
            />
            <MdDeleteForever
              size={24}
              className="text-red-600 cursor-pointer"
              onClick={() => handleDeleteClick(index)}
            />
          </div>
        )}
      </div>
    </div>
  );
}

ItemCard.propTypes = {
  index: PropTypes.number,
  todo: PropTypes.object,
};
