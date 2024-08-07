import "../App.css";
import { useState, useEffect } from "react";

const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";
export const ToDos = () => {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    fetch(TODOS_URL)
      .then((data) => data.json())
      .then((toDo) => {
        setToDos(toDo);
      });
  }, []);

  return (
    <div className="toDosComponent">
      <p className="ToDosText">Список Задач</p>
      <button className="sortBtn">Сортировать</button>
      <input className="toDosSearch" placeHolder="Поиск задачи..."></input>
      {toDos.map(({ userId, id, title, completed }) => {
        return (
          <div className="toDo" key={id}>
            <span className="toDoId">{id}</span>
            <span className="toDoTitle">{title}</span>
            <button className="changeToDoBtn">Изменить</button>
            <div className="underlineToDo"></div>
          </div>
        );
      })}
    </div>
  );
};
