import { useState, useEffect } from "react";
import ToDoList from "../components/ToDoList";
import CreateItem from "../components/CreateItem";
import { Container, Row } from "react-bootstrap";
import axios from "axios";

const Home = () => {
  const [list, setList] = useState([]);

  const getAllItems = async token => {
    try {
      const res = await axios.get("/api/v1/items", {
        headers: { authorization: `Bearer ${token}` },
      });
      const newList = res.data;
      setList(newList);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("name") || !localStorage.getItem("token")) {
      return (window.location.href = "/");
    }
  }, []);

  return (
    <Container className="px-4">
      <Row>
        <CreateItem setList={setList} getAllItems={getAllItems} />
      </Row>
      <Row>
        <ToDoList list={list} setList={setList} getAllItems={getAllItems} />
      </Row>
    </Container>
  );
};

export default Home;
