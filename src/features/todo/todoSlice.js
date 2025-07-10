import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    myTodo: [],
  },
  reducers: {
    updateTodo: (state, action) => {
      state.myTodo = action.payload;
    },
    deleteTodo: (state, action) => {
      state.myTodo = action.payload;
    },
  },
});

export const { updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
