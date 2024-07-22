import { useDispatch } from "react-redux";
import { sortTodo } from "../../store/todoSlice";

import "./Select.css";

const Select = () => {
  const dispatch = useDispatch();

  const handleSort = (sortOption) => {
    dispatch(sortTodo(sortOption));
  };

  return (
    <select className="select" onChange={(e) => handleSort(e.target.value)}>
      <option value="All">All</option>
      <option value="Completed">Completed</option>
      <option value="Not completed">Not completed</option>
    </select>
  );
};

export default Select;
