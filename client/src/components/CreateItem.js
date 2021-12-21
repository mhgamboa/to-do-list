import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";

const CreateItem = ({ getAllItems }) => {
  const handleCreateItem = async e => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        "/api/v1/items",
        { name: e.target[0].value },
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );
      getAllItems(token);
      e.target[0].value = "";
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Form className="container" onSubmit={handleCreateItem}>
      <Form.Label className="h1 w-full col-12">Enter an Item</Form.Label>
      <Row>
        <Col xs={10}>
          <Form.Control type="text" placeholder="Enter An Item" className="col-6 shadow-sm" />
        </Col>
        <Col xs={2}>
          <Button variant="primary" type="submit" className="shadow-sm">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default CreateItem;
