import { useState } from "react";
import { useAppDispatch } from "./hook";

import { addTodo } from "./store/todoSlice";

import TodoList from "./components/TodoList/TodoList";
import InputField from "./components/InputField/InputField";
import Select from "./components/Select/Select";

import "./App.css";

function App() {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const addTask = () => {
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div className="App">
      <div className="todo-wrapper">
        <Select />
        <InputField text={text} handleInput={setText} handleSubmit={addTask} />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
