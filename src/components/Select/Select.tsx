import { useAppDispatch } from "../../hook";
import { sortTodo } from "../../store/todoSlice";

import "./Select.css";

const Select: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSort = (sortOption:string) => {
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
