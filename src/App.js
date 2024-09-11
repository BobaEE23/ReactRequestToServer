import "./App.css";
import { InputTodoListCreate } from "./components/InputTodoListCreate";
import { Todos } from "./components/ToDos";
import { useState } from "react";

import { AppContext } from "./context";
export const App = () => {
  const [refreshToDos, setRefreshToDos] = useState(false);
  const [isSort, setIsSort] = useState(false);
  const [toDos, setToDos] = useState([]);
  return (
    <AppContext.Provider
      value={{
        refreshToDos,
        isSort,
        setIsSort,
        toDos,
        setToDos,
        setRefreshToDos,
      }}
    >
      <div className="App">
        <InputTodoListCreate></InputTodoListCreate>

        <Todos></Todos>
      </div>
    </AppContext.Provider>
  );
};
