import "./App.css";
import { Input } from "./components/Input";
import { ToDos } from "./components/ToDos";

export const App = () => {
  return (
    <div className="App">
      <Input></Input>

      <ToDos></ToDos>
    </div>
  );
};
