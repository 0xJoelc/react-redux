import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo } from "./features/todo/todoSlice";
import ToDoList from "./ToDoList";

function ToDo() {
  const [todo, setTodo] = useState({
    text: "",
    todoId: "",
    todoDate: "",
  });

  const main = useSelector((state) => state.todo.myTodo);
  //   console.log(main);
  const dispatch = useDispatch();

  const handleTodoId = () => {
    return dispatch(updateTodo(main.push()));
  };
  return (
    <>
      <section className="my-70  mx-auto p-3 border rounded-md grid">
        <div>
          {" "}
          <div>
            <h1 className="font-mono font-semibold text-4xl place-items-center mb-10">
              ToDo.hyperliquid
            </h1>
          </div>
          <div className="">
            <input
              className="w-full h-10 mb-3 p-2"
              type="text"
              placeholder="write ToDo"
              onChange={(e) => {
                dispatch(updateTodo(e.target.value));
              }}
            />
            <input
              className="w-full h-10 mb-3 "
              type="datetime-local"
              onChange={(e) => {
                setTodo({ ...todo, todoDate: e.target.value });
              }}
            />
            <button
              onClick={handleTodoId}
              className="bg-green-500 w-full rounded-md mb-4"
            >
              add
            </button>
          </div>
        </div>

        <div className="w-[600px] h-50 rounded-md border p-5">
          <ToDoList />
        </div>
      </section>
    </>
  );
}
export default ToDo;
