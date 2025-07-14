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



  const dispatch = useDispatch();

  const handleAddTodo = () => {
    todo.todoId = Date.now();
    todo.todoDate = new Date().toDateString();

    dispatch(updateTodo(todo));
    setTodo({
      text: "",
      todoId: "",
      todoDate: "",
    });
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
            value={todo.text}
              className="w-full h-10 mb-3 p-2"
              type="text"
              placeholder="write ToDo"
              onChange={(e) => {
                setTodo({ ...todo, text: e.target.value });
              }}
            />
    
            <button
              onClick={handleAddTodo}
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
