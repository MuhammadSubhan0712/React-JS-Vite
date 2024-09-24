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
            
            updatetodo: (state , action) => {
                const { index , updVal } = action.payload;
                state.todo.splice(index , 1 ,{title: updVal});
            },

            removetodo: (state , action) => {
                state.todo.splice(action.payload.index , 1)
            }
            
        }
    })

export const { addtodo , updatetodo , removetodo} = todoSlice.actions

export default todoSlice.reducer