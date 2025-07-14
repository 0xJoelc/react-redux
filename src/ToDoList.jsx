import { useDispatch, useSelector } from "react-redux";
import { updateTodo, deleteTodo } from "./features/todo/todoSlice";

function ToDoList() {
  const todo = useSelector((state) => state.todo.myTodo);
  const dispatch = useDispatch();

  return (
    <div className="h-full overflow-y-auto">
      {todo.map((item) => {
        return (
          <ul key={item.todoId}>
            <li className="mb-2">
              {item.text}
              <br />
              {item.todoDate}
              <br />
              <button
                onClick={() => {dispatch(deleteTodo(item.todoId))}}
                className=" bg-red-600  rounded-md mb-1 p-1"
              >
                delete
              </button>
              <hr />
            </li>
          </ul>
        );
      })}
    </div>
  );
}
export default ToDoList;
