import "./App.css";
import { Input } from "./components/Input";
import { ToDos } from "./components/ToDos";
import { useState } from "react";
export const App = () => {
  const [refreshToDos, setRefreshToDos] = useState(false);
  const [isSort, setIsSort] = useState(false);
  const [toDos, setToDos] = useState([]);
  return (
    <div className="App">
      <Input
        refreshToDos={refreshToDos}
        isSort={isSort}
        setIsSort={setIsSort}
        toDos={toDos}
        setToDos={setToDos}
      ></Input>

      <ToDos
        refreshToDos={refreshToDos}
        setRefreshToDos={setRefreshToDos}
        isSort={isSort}
        setIsSort={setIsSort}
        toDos={toDos}
        setToDos={setToDos}
      ></ToDos>
    </div>
  );
};
