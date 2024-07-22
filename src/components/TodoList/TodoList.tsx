import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";

import './TodoList.css';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
