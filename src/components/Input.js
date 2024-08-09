import "../App.css";

export const Input = ({
  inputToDo,
  setInputToDo,
  refreshToDos,
  setRefreshToDos,
  isSort,
  setIsSort,
}) => {
  const createToDo = () => {
    fetch("http://localhost:3005/toDoS", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        title: inputToDo,
      }),
    })
      .then((rawResponse) => rawResponse.json())
      .then(() => setRefreshToDos(!refreshToDos));
  };
  return (
    <div className="inputComponent">
      <form>
        <input
          value={inputToDo}
          onChange={({ target }) => setInputToDo(target.value)}
          className="input"
          placeholder="Добавление задачи..."
        ></input>
        <button onClick={createToDo} className="buttonCreateToDo" type="submit">
          Добавить задачу
        </button>
      </form>
    </div>
  );
};
