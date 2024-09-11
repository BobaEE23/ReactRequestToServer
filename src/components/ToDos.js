import "../App.css";
import { useState, useEffect } from "react";
import { TodosList } from "./TodosList";
import { AppContext } from "../context";
import { useContext } from "react";
export const Todos = ({}) => {
  const [sortedToDos, setSortedToDos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const { setToDos, refreshToDos, setIsSort, isSort, toDos } =
    useContext(AppContext);
  useEffect(() => {
    fetch("http://localhost:3005/toDoS")
      .then((data) => data.json())
      .then((toDo) => {
        setToDos(toDo);
        setSortedToDos(toDo);
      });
  }, [refreshToDos]);

  const changeToDo = (idOfToDo) => {
    const newToDo = prompt("Введите измененную задачу");

    fetch(`http://localhost:3005/toDoS/${idOfToDo}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({ title: newToDo }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((updatedToDo) => {
        setToDos((prevTodos) =>
          prevTodos.map((todo) => (todo.id === idOfToDo ? updatedToDo : todo))
        );
      });
  };

  const deletToDo = (idOfToDo) => {
    fetch(`http://localhost:3005/toDoS/${idOfToDo}`, {
      method: "DELETE",
    }).then(() => {
      setToDos((prevTodos) => prevTodos.filter((todo) => todo.id !== idOfToDo));
    });
  };

  const sortToDoS = () => {
    setIsSort(!isSort);
    const sortedArray = [...toDos].sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    setSortedToDos(sortedArray);
  };

  const filteredToDos = (isSort ? sortedToDos : toDos).filter((toDo) =>
    toDo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AppContext.Provider
      value={{ filteredToDos, sortToDoS, deletToDo, changeToDo }}
    >
      <TodosList searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </AppContext.Provider>
  );
};
