import { createContext, useState } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import "./index.css";

export const editTextProvider = createContext();
export const seteditTextProvider = createContext();
function App() {
  const [newText, setNewText] = useState("");
  console.log(newTetx);
  return (
    <editTextProvider.Provider value={newText}>
      <seteditTextProvider.Provider value={setNewText}>
        <div className="text-red-300 p-[50px]">
          <AddTodo />
          <Todos />
        </div>
      </seteditTextProvider.Provider>
    </editTextProvider.Provider>
  );
}

export default App;
