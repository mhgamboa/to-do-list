import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const CreateItem = setList => {
  let [newItem, updateNewItem] = useState("");

  const handleSubmit = e => {
    // TODO: Have HandleSubmit update database, which should updateList
    e.preventDefault();
    console.log(newItem);
  };
  return (
    <Form className="bg-light container" onSubmit={handleSubmit}>
      <div className="row">
        <Form.Label className="w-full col-12">Enter an Item</Form.Label>
      </div>
      <div className="row">
        <Form.Control
          type="text"
          placeholder="Enter An Item"
          className="col-6"
          defaultValue={newItem}
          onChange={e => {
            updateNewItem(e.target.value);
          }}
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default CreateItem;
