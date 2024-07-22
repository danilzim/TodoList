import { useState } from "react";

import { useDispatch } from "react-redux";
import {
  removeTodo,
  toggleTodoComplete,
  editTodo,
} from "../../store/todoSlice";

import "./TodoItem.css";

const TodoItem = ({ id, text, completed }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newText, setNewText] = useState(text);
  const dispatch = useDispatch();

  const handleClickSave = () => {
    dispatch(editTodo({ id, text: newText, completed }));
    setIsEdit(false);
  };

  const handleChangeNewText = () => {
    setIsEdit(true);
  };

  const handleSetNewText = (e) => {
    setNewText(e.target.value);
  };

  return (
    <li className="todo-item">
      <input
        className="checkbox"
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoComplete({ id }))}
      />
      {!isEdit && <span className="task">{text}</span>}
      {isEdit && <input value={newText} onChange={handleSetNewText} />}
      {!isEdit && (
       <button className="button-edit" onClick={handleChangeNewText}>
       Edit
     </button>
        
      )}
      {isEdit && (
        <button className="button-delete" onClick={handleClickSave}>
          Save
        </button>
      )}
      <button
        className="button-delete"
        onClick={() => dispatch(removeTodo({ id }))}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
