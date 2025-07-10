import { useDispatch, useSelector } from "react-redux";
import { updateTodo, deleteTodo } from "./features/todo/todoSlice";

function ToDoList() {
  const todo = useSelector((state) => state.todo.myTodo);
  const dispatch = useDispatch();
  return (
    <ul className="flex">
      <li className="mr-2">{todo}</li>
      <button
        className="border rounded-md bg-gray-500 text-amber-50 p-1 font-extralight hover:bg-black/80 cursor-pointer"
        onClick={() => {
          dispatch(deleteTodo(""));
        }}
      >
        delete
      </button>
    </ul>
  );
}
export default ToDoList;
