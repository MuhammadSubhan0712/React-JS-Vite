import { createSlice, nanoid } from '@reduxjs/toolkit'


export const todoSlice = createSlice({
        name: "Todos",
        initialState: {
         todo: [],
        },

        reducers: {
            addtodo: (state , action) => {
                state.todo.push({
                    title: action.payload.title,
                    id: nanoid()
                })
            },
            removetodo: (state , action) => {
                state.todo.splice(action.payload.index , 1)
            },
            // updatetodo: (state , action) => {
                
            // }
        }
    })

export const { addtodo , removetodo  } = todoSlice.actions

export default todoSlice.reducer