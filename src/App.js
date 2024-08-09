import "./App.css";
import { Input } from "./components/Input";
import { ToDos } from "./components/ToDos";
import { useState } from "react";
export const App = () => {
  const [inputToDo, setInputToDo] = useState("");
  const [refreshToDos, setRefreshToDos] = useState(false);
  const [isSort, setIsSort] = useState(false);
  return (
    <div className="App">
      <Input
        inputToDo={inputToDo}
        setInputToDo={setInputToDo}
        refreshToDos={refreshToDos}
        isSort={isSort}
        setIsSort={setIsSort}
      ></Input>

      <ToDos
        refreshToDos={refreshToDos}
        setRefreshToDos={setRefreshToDos}
        isSort={isSort}
        setIsSort={setIsSort}
      ></ToDos>
    </div>
  );
};
