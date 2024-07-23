import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

type TodosState = {
  todos: Todo[];
  sortOption: string;
};

const initialState: TodosState = {
  todos: [],
  sortOption: "All",
};

const todoSlice = createSlice({
  name: "todos",
  initialState,

  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload,
        completed: false,
      });
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodoComplete(state, action: PayloadAction<string>) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (toggledTodo) toggledTodo.completed = !toggledTodo.completed;
    },
    editTodo(state, action: PayloadAction<Todo>) {
      const { id, text } = action.payload;
      const newTodos = state.todos.map((todo) => {
        const todoId = todo.id;
        if (todoId === id) {
          return {
            id: todoId,
            text: text,
            completed: todo.completed,
          };
        }
        return todo;
      });
      state.todos = newTodos;
    },
    sortTodo(state, action: PayloadAction<string>) {
      state.sortOption = action.payload;
    },
  },
});

export const { addTodo, removeTodo, toggleTodoComplete, editTodo, sortTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
