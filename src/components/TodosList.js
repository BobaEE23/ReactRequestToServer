import { TodosListMap } from "./TodosListMap";
import { useContext } from "react";
import { AppContext } from "../context.js";
export const TodosList = ({ searchTerm, setSearchTerm }) => {
  const { sortToDoS } = useContext(AppContext);

  return (
    <div className="toDosComponent">
      <p className="ToDosText">Список Задач</p>
      <button onClick={sortToDoS} className="sortBtn">
        Сортировать
      </button>
      <input
        className="toDosSearch"
        placeholder="Поиск задачи..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <TodosListMap />
    </div>
  );
};
