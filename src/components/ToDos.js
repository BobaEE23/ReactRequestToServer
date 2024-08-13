import "../App.css";
import { useState, useEffect } from "react";

const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";
export const Todos = () => {
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
      <ul className="list">
        {toDos.map(({ id, title }) => (
          <li key={id} className="list-item">
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};
