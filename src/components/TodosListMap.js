import { useContext } from "react";
import { AppContext } from "../context.js";
export const TodosListMap = () => {
  const { filteredToDos, changeToDo, deletToDo } = useContext(AppContext);

  return (
    <>
      {filteredToDos.map(({ id, title }) => {
        return (
          <div className="toDo" key={id}>
            <span className="toDoTitle">{title}</span>
            <button onClick={() => changeToDo(id)} className="changeToDoBtn">
              Изменить
            </button>
            <button onClick={() => deletToDo(id)} className="deleteToDoBtn">
              Удалить
            </button>
            <div className="underlineToDo"></div>
          </div>
        );
      })}
    </>
  );
};
