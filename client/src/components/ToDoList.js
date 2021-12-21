import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ModalComponent from "./ModalComponent";

const List = ({ list, setList, getAllItems }) => {
  const [showModal, toggleShowModal] = useState(false);
  const [itemName, setItemName] = useState("");
  const [item_id, setItem_id] = useState("");
  const [modalType, setModalType] = useState("");

  useEffect(() => {
    console.log("Get all items:");
    getAllItems(localStorage.getItem("token"));
  }, []);

  const handleModal = e => {
    setItem_id(e.target.parentElement.parentElement.getAttribute("_id"));
    setItemName(e.target.parentElement.parentElement.children[0].innerText);
    e.target.innerText === "🗑️" ? setModalType("delete") : setModalType("update");

    toggleShowModal(true);
  };

  return (
    <main className="toDoList">
      <ModalComponent
        show={showModal}
        toggleShowModal={toggleShowModal}
        itemName={itemName}
        setItemName={setItemName}
        item_id={item_id}
        setItem_id={setItem_id}
        modalType={modalType}
        setModalType={setModalType}
        getAllItems={getAllItems}
        setList={setList}
      />
      <table className="table border mt-5">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Completed?</th>
            <th scope="col">Edit Item</th>
            <th scope="col">Delete Item</th>
          </tr>
        </thead>
        <tbody>
          {list.map(item => {
            return (
              <tr key={item._id} _id={item._id} className="bg-light border p-3">
                <td className="h4">{item.name}</td>
                {item.completed ? <td>✔️</td> : <td>❌</td>}
                <td>
                  <Button variant="light" onClick={handleModal}>
                    ✏️
                  </Button>
                </td>
                <td>
                  <Button variant="light" onClick={handleModal}>
                    🗑️
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

export default List;
