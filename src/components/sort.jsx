import PropTypes from "prop-types";
import { FaArrowsDownToLine, FaArrowsUpToLine } from "react-icons/fa6";

export default function Sort(props) {
  const { sort, setSort } = props;

  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <>
      <div className="flex flex-col justify-start  items-end w-1/5 ">
        <div className="flex flex-col w-full items-start  ">
          <div className="flex flex-row space-x-2 bg-white hover:bg-gray-100 p-2 rounded-xl cursor-pointer">
            <h1 onClick={() => handleSort()} className="text-lg ">
              Sort
            </h1>
            {sort ? (
              <FaArrowsDownToLine
                size={20}
                className="flex mt-1"
                onClick={() => setSort(!sort)}
              />
            ) : (
              <FaArrowsUpToLine
                size={20}
                className="flex mt-1"
                onClick={() => setSort(!sort)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

Sort.propTypes = {
  sort: PropTypes.bool.isRequired,
  setSort: PropTypes.func.isRequired,
};
