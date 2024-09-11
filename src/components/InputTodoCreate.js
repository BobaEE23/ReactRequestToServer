export const InputTodoCreate = ({ createToDo, inputToDo, setInputToDo }) => {
  return (
    <div className="inputComponent">
      <form onSubmit={createToDo}>
        <input
          value={inputToDo}
          onChange={({ target }) => setInputToDo(target.value)}
          className="input"
          placeholder="Добавление задачи..."
        />
        <button
          className="buttonCreateToDo"
          type="submit"
          disabled={!inputToDo}
        >
          Добавить задачу
        </button>
      </form>
    </div>
  );
};
