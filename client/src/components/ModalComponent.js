import { Modal, Button, Form } from "react-bootstrap";

const ModalComponent = props => {
  const closeModal = () => {
    props.setItem_id("");
    props.setItemName("");
    props.setModalType("");
    props.toggleShowModal(false);
  };

  const deleteItem = () => {
    console.log("delete");
    closeModal();
  };

  const updateItem = () => {
    console.log("update");
    closeModal();
  };

  return (
    <Modal
      show={props.show}
      onHide={closeModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="test">
        <Modal.Title id="contained-modal-title-vcenter">
          {props.modalType === "delete" ? "Delete" : "Update"} Item
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>
          {props.modalType === "delete"
            ? `Are you sure you want to delete ${props.itemName}?`
            : `How do you want to update ${props.itemName}?`}
        </h4>
        {props.modalType === "delete" ? (
          <p>Deleting this item can't be undone</p>
        ) : (
          <Form onSubmit={updateItem}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" defaultValue={props.itemName} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formItemCompleted">
              <Form.Check inline />
              <Form.Label>Completed?</Form.Label>
            </Form.Group>

            <Button variant="warning" type="submit">
              EDIT
            </Button>
          </Form>
        )}
      </Modal.Body>
      {props.modalType === "delete" && (
        <Modal.Footer>
          <Button variant="danger" onClick={deleteItem}>
            DELETE
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default ModalComponent;
