import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:1, text:'Hello World'}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(), 
                text: action.payload    // or ->  text: action.payload.text 
            }
            state.todos.push(todo) 
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter( (each)=> each.id !== action.payload )
        },
        updateTodo: (state, action)=>{
            const {id, uptext} = action.payload
            state.todos = state.todos.map( each=> each.id === id? {...each, text:uptext}:each )
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions 

export default todoSlice.reducer 


