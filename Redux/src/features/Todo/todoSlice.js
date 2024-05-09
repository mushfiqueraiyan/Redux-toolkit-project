import {createSlice, nanoid } from '@reduxjs/toolkit'; // by using createSlice you can create reducer slice And You wanna id defferent defferent ID in you project just ad nanoid its create an unique ID and thats it !


//its means who the store will look like at starting  does it empty or have any value are you fetching data from database for that we use initialState
const initialState = {
    todos: [{
        id:1,
        text: "Hello Raiyan",   //This is a first todo and its an object
    },
]
}

export const todoSlice = createSlice({ 
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action)=>{ //always use state and action - state gives you the info about initialState and Action make like you click delete and the action will delete the todo click add then added the todo.
            const todo = {
                id: nanoid(), //nanoid for unique id 
                text: action.payload, //payload is a object
            }
            state.todos.push(todo)

        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },

        updateTodo: (state, action)=>{
            const { id, text } = action.payload;

            state.todos = state.todos.map((todo)=> todo.id === id ? { ...todo, text: text } : todo)
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions //in reducer you can export it two time. - its individual

export default todoSlice.reducer // its for all pages