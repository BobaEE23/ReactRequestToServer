import "./App.css";
import { Input } from "./components/Input";
import { Todos } from "./components/Todos";

export const App = () => {
  return (
    <div className="App">
      <Input />

      <Todos />
    </div>
  );
};
