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
            })
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        toggleTodoComplete(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;
        },

        editTodo(state, action) {
            const {id, text} = action.payload;
            const newTodos = state.todos.map(todo => {
                const todoId = todo.id;
                if (todoId === id) {
                    return {
                        id: todoId,
                        text: text,
                        completed: todo.completed,
                    }
                } 
                return todo;
            })
            state.todos = newTodos;
        },
        
        
    },
});


export const {addTodo, removeTodo, toggleTodoComplete, editTodo} = todoSlice.actions;
export default todoSlice.reducer;