import { useState } from "react";
import { Form, Button, Row, Col, Modal } from "react-bootstrap";
import axios from "axios";

const CreateItem = setList => {
  let [newItem, updateNewItem] = useState("");

  const createItem = async e => {
    // TODO: Have createItem update database, which should updateList
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post("/api/v1/items", {
        headers: { authorization: `Bearer ${token}` },
        name: newItem,
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Form className="container" onSubmit={createItem}>
      <Form.Label className="h1 w-full col-12">Enter an Item</Form.Label>
      <Row>
        <Col xs={10}>
          <Form.Control
            type="text"
            placeholder="Enter An Item"
            className="col-6"
            defaultValue={newItem}
            onChange={e => {
              updateNewItem(e.target.value);
            }}
          />
        </Col>
        <Col xs={2}>
          <Button variant="primary" type="submit" onClick={createItem}>
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default CreateItem;
