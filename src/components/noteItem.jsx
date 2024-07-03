import PropTypes from "prop-types";
import ItemCard from "./itemCard";
import useFirestore from "../hooks/useFirestore";

export default function NoteItem({ sort }) {
  const { docs: todos } = useFirestore("todos");

  return (
    <div className="w-2/3 min-h-80 bg-gray-400 shadow-md rounded-md p-4 ">
      {todos
        .sort((a, b) =>
          sort
            ? new Date(a.Date) - new Date(b.Date)
            : new Date(b.Date) - new Date(a.Date)
        )
        .map((todo, index) => (
          <ItemCard key={index} todo={todo} />
        ))}
    </div>
  );
}

NoteItem.propTypes = {
  sort: PropTypes.bool.isRequired,
};
