import "./App.css";
import { useState, useEffect } from "react";
import ToDoService from "./services/toDo";

function App() {
  const [list, updateList] = useState([]);
  const [userInput, updateUserInput] = useState("");

  useEffect(() => {
    retrieveToDos();
  }, []);

  useEffect(() => {}, [list]);

  const retrieveToDos = async () => {
    try {
      console.log("Get Request sent");
      const response = await ToDoService.getItems();
      console.log("Get Request Completed");
      updateList(response.data);
      console.log("List Updated");
    } catch (err) {
      console.error(err);
    }
  };

  const updateToDos = async (e) => {
    e.preventDefault();
    try {
      console.log("Post request sent");
      await ToDoService.createItem({ name: userInput });
      console.log("Post request completed");
      updateList([...list, userInput]);
      updateUserInput("");
    } catch (err) {
      console.error(err);
    }
  };

  const deleteToDoItem = async (item) => {
    try {
      console.log("Delete request sent");
      console.log({ name: item });
      await ToDoService.deleteItem({ name: item });
      console.log("Delete request completed");

      updateList(list.filter((toDoItem) => toDoItem !== item));
      console.log("item Deleted");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="App">
      <h1>My To Do List</h1>
      <form>
        <input
          type="text"
          name="name"
          value={userInput}
          placeholder="Enter an Item Here..."
          onChange={(e) => updateUserInput(e.target.value)}
        />
        <button
          onClick={(e) => {
            updateToDos(e);
          }}
        >
          Add To List
        </button>
      </form>
      <h2>Here's the list:</h2>
      <ul>
        {list.map((listItem) => (
          <div key={listItem}>
            <li>{listItem}</li>
            <button
              onClick={() => {
                deleteToDoItem(listItem);
              }}
            >
              delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
