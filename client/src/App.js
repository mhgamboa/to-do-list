import "./App.css";
import { useState, useEffect } from "react";
import ToDoService from "./services/toDo";

function App() {
  const [list, updateList] = useState([]);
  const [userInput, updateUserInput] = useState("");

  const retrieveToDos = () => {
    ToDoService.getItems().then((response) => {
      updateList(response.data);
    });
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <button
        onClick={() => {
          retrieveToDos();
        }}
      >
        Here are the items:
      </button>
      <h2>Here's the list:</h2>
      <ul>
        {list.map((listItem) => (
          <li key={listItem}>{listItem}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
