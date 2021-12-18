import { Modal, Button } from "react-bootstrap";

const ConfirmModal = props => {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Delete Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Are you sure you want to delete this item?</h4>
        <p>Deleting items can't be undone</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          DELETE
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
