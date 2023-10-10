import React, { useContext, useState } from "react";
import Axios from "axios";
import PopUp from "./PopUp";
import { editTextProvider } from "../App";

function Todo({ todo }) {
  const newText = useContext(editTextProvider);
  console.log(newText);
  const [show, setShow] = useState(false);
  const id = todo._id;
  const port = `http://localhost:4000/api/todos/${id}`;
  const handelDelete = () => {
    Axios.delete(port)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  const handelComplete = () => {
    Axios.patch(port, { completed: true })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-gray-100 shadow-md p-4 mb-4 rounded-lg">
      <h2 className="text-xl font-semibold">{todo.description}</h2>
      <p className="text-gray-600 mt-2">
        <span className="text-sm font-medium">Task ID:</span> {todo._id} <br />
        <span className="text-sm font-medium">Completed:</span>
        {todo.completed === true ? "yes" : "no"} <br />
        <span className="text-sm font-medium">Created At:</span>
        {new Date(todo.createdAt).toLocaleString()}
      </p>
      <div className="flex items-center py-6 gap-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2">
          Edit
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={() => setShow(true)}
        >
          Delete
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          onClick={handelComplete}
        >
          Mark as Completed
        </button>
      </div>
      {show && (
        <PopUp todo={todo} handelDelete={handelDelete} setShow={setShow} />
      )}
    </div>
  );
}

export default Todo;
