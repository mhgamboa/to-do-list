import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import DeleteModal from "./DeleteModal";

const List = ({ list, setList }) => {
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [itemName, setItemName] = useState("");
  const [item_id, setItem_id] = useState("");

  useEffect(() => {
    console.log("Get all items:");
    getAllItems(localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    console.log("item_id:", item_id);
    console.log("itemName:", itemName);
  });

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

  const handleDeleteModal = e => {
    if (item_id != "") {
      setItem_id("");
    } else {
      setItem_id(e.target.parentNode.parentNode.getAttribute("_id"));
    }
    if (itemName !== "") {
      setItemName("");
    } else {
      setItemName(e.target.parentNode.parentNode.childNodes[0].innerText);
    }
    setDeleteModalShow(prevDeleteModalShow => !prevDeleteModalShow);
  };

  const deleteItem = () => {
    setDeleteModalShow(false);
    console.log(item_id);
  };

  return (
    <main className="toDoList">
      <DeleteModal show={deleteModalShow} onHide={handleDeleteModal} deleteitem={deleteItem} />
      <table className="table border mt-5">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Completed?</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete Item?</th>
          </tr>
        </thead>
        <tbody>
          {list.map(item => {
            return (
              <tr key={item._id} _id={item._id} className="bg-light border p-3">
                <td className="h4">{item.name}</td>
                {item.completed ? <td>✔️</td> : <td>❌</td>}
                <td>
                  <Button variant="light">✏️</Button>
                </td>
                <td>
                  <Button variant="light" onClick={handleDeleteModal}>
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
