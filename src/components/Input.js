import "../App.css";

export const Input = () => {
  return (
    <div className="inputComponent">
      <form>
        <input
          className="inputCreateToDo"
          placeHolder="Добавление задачи..."
        ></input>
        <button className="buttonCreateToDo" type="submit">
          Добавить задачу
        </button>
      </form>
    </div>
  );
};
