import React, { useState } from "react";
import Axios from "axios";

function AddTodo() {
  const [description, setDesc] = useState("");
  const port = "http://localhost:4000/api/todos";
  const handeladd = (e) => {
    e.preventDefault();
    Axios.post(port, { description })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form
      onSubmit={handeladd}
      className="max-w-lg mx-auto my-8 flex items-center  border-b-2 border-blue-500 py-2"
    >
      <input
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Add Todo"
        onChange={(e) => setDesc(e.target.value)}
      />
      <button
        onClick={handeladd}
        className="bg-blue-500 w-[200px] hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
