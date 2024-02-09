import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: {},
    reducers: {

        addTodo(state , action) {
            const {date , description} = action.payload
            if(state[date]) {
                state[date].push({id: Date.now() , description , completed: false})
            } else {
                state[date] = [{id: Date.now() ,description , completed: false}]
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

        onDelete (state,action) {
            const {date , id} = action.payload

            state[date].filter(todo => todo !== id)

            // state[date].forEach((value,key) => {
            //     if(value.id !== id) {
            //         delete state[date][key]
            //     }
            // })

            // const index = state[date].findIndex(n => n.id === id);
            //     if (index !== -1) {
            //      state[date].splice(index, 1);
            //     }
        }
    }
})

export const {addTodo , updateTodo, onDelete} = todoSlice.actions
export default todoSlice.reducer