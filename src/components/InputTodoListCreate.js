import "../App.css";
import { useState } from "react";
import { InputTodoCreate } from "./InputTodoCreate";
import { useContext } from "react";
import { AppContext } from "../context";
export const InputTodoListCreate = () => {
  const { setToDos } = useContext(AppContext);
  const [inputToDo, setInputToDo] = useState("");

  const createToDo = (event) => {
    event.preventDefault();

    fetch("http://localhost:3005/toDoS", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        title: inputToDo,
      }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((newToDo) => {
        setToDos((prevTodos) => [...prevTodos, newToDo]);
        setInputToDo("");
      });
  };

  return (
    <InputTodoCreate
      createToDo={createToDo}
      inputToDo={inputToDo}
      setInputToDo={setInputToDo}
    />
  );
};
