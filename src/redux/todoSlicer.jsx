import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 

export const fetchTodo = createAsyncThunk('fetchTodo', async ()=>{
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    return data.json()
})  

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        isLoading : false,
        data : null,
        error: false,
        value : 1
    },
    extraReducers : (builder) => {
        builder.addCase(fetchTodo.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchTodo.fulfilled, (state, action) =>{
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchTodo.rejected, (state)=>{
            state.error = true
        })
    },
    reducers : {
        deleteTodo : (state, action)=>{
            state.data =  state.data.filter((e)=>{
                  if (e.id !== action.payload){
                      return e
                  }
              })
          },
          addTodo : (state,action)=>{
            state.value = action.payload           
        },
    }
})
export const {deleteTodo,addTodo} = todoSlice.actions
export default todoSlice.reducer;