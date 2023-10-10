import React, { useState, useEffect } from "react";
import Axios from "axios";
import Todo from "./Todo";

function Todos() {
  const [todos, setTodos] = useState([]);
  const port = "http://localhost:4000/api/todos";
  useEffect(() => {
    Axios.get(port)
      .then((res) => {
        if (res.data.todos) {
          setTodos(res.data.todos);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [todos]);
  return (
    <div className="text-red-300 flex gap-4 justify-center flex-wrap">
      {todos.length > 0 &&
        todos.map((todo) => {
          return <Todo key={todo._id} todo={todo} />;
        })}
    </div>
  );
}

export default Todos;
