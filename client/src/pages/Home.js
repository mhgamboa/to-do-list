import { useState, useEffect } from "react";
import ToDoList from "../components/ToDoList";
import CreateItem from "../components/CreateItem";
import { Container, Row } from "react-bootstrap";

const Home = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("name") || !localStorage.getItem("token")) {
      return (window.location.href = "/");
    }
  }, []);

  return (
    <Container className="px-4">
      <Row>
        <CreateItem setList={setList} />
      </Row>
      <Row>
        <ToDoList list={list} setList={setList} />
      </Row>
    </Container>
  );
};

export default Home;
