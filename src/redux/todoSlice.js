import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: {},
    reducers: {

        addTodo (state , action) {
            const {date , description} = action.payload
            if (state[date]) {
                state[date].push({id: Date.now() , description , completed: false})
            } else {
                state[date] = [{id: Date.now() , description , completed: false}]
            }
        } ,

        updateTodo (state ,action) {
            const {date , description , id} = action.payload
           state[date].forEach(todo => {
                if(todo.id === id) {
                    todo.description = description
                }
           })
        } ,

        onDelete (state , action) {
            const {date , id} = action.payload
            return state[date].filter((todo) => todo.id !== id) 
            
        } ,

        onCompleted (state ,action) {
            const {date , completed, id} = action.payload
            state[date].findIndex((todo) => {
                if(todo.id === id) {
                    return todo.completed = !completed
                }
            }) 
           
        } ,
    }
})

export const {addTodo , updateTodo, onDelete ,onCompleted} = todoSlice.actions
export default todoSlice.reducer