import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";

import "./TodoList.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const sortOption = useSelector((state) => state.todos.sortOption);

  const sortTodoList = todos.filter((todo) => {
    if (sortOption === "All") return true;
    if (sortOption === "Completed" && todo.completed) return true;
    if (sortOption === "Not completed" && !todo.completed) return true;
    return false;
  });

  return (
    <ul className="todo-list">
      {todos.length === 0 ? (
        <div className="empty-todo">Please, write a task</div>
      ) : (
        sortTodoList.map((todo) => <TodoItem key={todo.id} {...todo} />)
      )}
    </ul>
  );
};

export default TodoList;
