import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false,
                isEditing: false,
            })
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        toggleTodoComplete(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;
        },

        //  editTodo(state, action) => {
        //     setTodos(
        //       todos.map((todo) =>
        //         todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
        //       )
        //     );
        //   },
        
        //  editTask(state, action) => {
        //     setTodos(
        //       todos.map((todo) =>
        //         todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
        //       )
        //     );
        //   },
    },
});


export const {addTodo, removeTodo, toggleTodoComplete} = todoSlice.actions;
export default todoSlice.reducer;