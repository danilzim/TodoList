import { useState } from "react";

import { useAppDispatch } from "../../hook";
import {
  removeTodo,
  toggleTodoComplete,
  editTodo,
} from "../../store/todoSlice";

import "./TodoItem.css";

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newText, setNewText] = useState(text);
  const dispatch = useAppDispatch();

  const handleClickSave = () => {
    dispatch(editTodo({ id, text: newText, completed }));
    setIsEdit(false);
  };

  const handleChangeNewText = () => {
    setIsEdit(true);
  };

  const handleSetNewText: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setNewText(e.target.value);
  };

  return (
    <li className="todo-item">
      <input
        className="checkbox"
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoComplete(id))}
      />
      {!isEdit && <span className="task">{text}</span>}
      {isEdit && <input value={newText} onChange={handleSetNewText} />}
      <div className="button-block">
        {!isEdit && (
          <button className="button-edit" onClick={handleChangeNewText}>
            Edit
          </button>
        )}
        {isEdit && (
          <button className="button-edit" onClick={handleClickSave}>
            Save
          </button>
        )}
        <button
          className="button-delete"
          onClick={() => dispatch(removeTodo(id))}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
