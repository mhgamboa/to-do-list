import { useState } from "react";
import ToDoList from "../components/ToDoList";
import CreateItem from "../components/CreateItem";

const initialState = [
  { name: "do laundry", completed: false, _id: "bhsfdasjkd" },
  { name: "do dishes", completed: true, _id: "bhsfdsdfasjkd" },
  { name: "Wash car", completed: true, _id: "bhsfdsdfasjkw2d" },
];
const Home = () => {
  const [list, setList] = useState(initialState);
  return (
    <div className="px-4">
      <CreateItem setList={setList} />
      <ToDoList list={list} setList={setList} />
    </div>
  );
};

export default Home;
