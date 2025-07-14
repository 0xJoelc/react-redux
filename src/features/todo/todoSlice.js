import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    myTodo: [],
  },
  reducers: {
    updateTodo: (state, action) => {
      state.myTodo = [...state.myTodo, action.payload];
      console.log(state.myTodo)
    },
    deleteTodo: (state,action) => {
   const updatesTodo = state.myTodo.filter(
    (item)=>item.todoId !== action.payload
   )
   state.myTodo = updatesTodo
    },
  },
});

export const { updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
