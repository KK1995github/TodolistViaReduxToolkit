import { createSlice, current, nanoid } from "@reduxjs/toolkit";

const initialState = {
    currentTodo : {id: nanoid(), title:"", description:"", completed : false},   //yeh current state k liy
    todos: [],  //listing k liy jo hme dikhega
    currentIndex : null, // yeh state for edit case
    isModalOpen : false
    
}

export const TodoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {           //reducer containes all miner reducer
        // actions
        handleInputChange: (state, action)=>{
             const {name , value} = action.payload
             state.currentTodo = {...state.currentTodo, [name]: value}
        },
         addTodo :(state, action) => {
            state.todos.push(action.payload)   //jo bhi hum likh rhe wo hmaari list mei add ho jaaye
         },
         removeTodo :(state, action) => {
           const id = action.payload
           state.todos = state.todos.filter((todo) =>
         todo.id !== id )
         },

         editTodo :(state, action) => {
            const index = action.payload
            state.currentIndex = index
            state.currentTodo = state.todos[index]
state.isModalOpen=true;
            
         },
         toggelButton : (state, action) => {
            state.isModalOpen=action.payload
            if (!action.payload) {
                state.currentTodo={title:"", description:"", id:""}
                
            }
         },
         updateTodo:(state,action)=>{
            const{id,description, title}= action.payload
            state.todos= state.todos.map((todo)=>
            {
                if (todo.id===id) {
                    todo.title= title
                    todo.description= description
                    state.isModalOpen= false
                }return todo;
            })
         },
         completeTodo:(state, action) => {
            const {index} = action.payload
            const todo = state.todos[index]
            console.log("--=--=-=-=->",todo);
            if(todo){
                todo.completed = !todo.completed
            }

         }
    }

})

export const {handleInputChange,addTodo, removeTodo, editTodo, toggelButton, updateTodo, completeTodo} = TodoSlice.actions
export default TodoSlice.reducer