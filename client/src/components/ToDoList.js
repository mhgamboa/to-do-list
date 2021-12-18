import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import ConfirmModal from "./DeleteModal";

const List = ({ list, setList }) => {
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    console.log("Get all items:");
    getAllItems(localStorage.getItem("token"));
  }, []);

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

  return (
    <main className="toDoList">
      <ConfirmModal show={modalShow} onHide={() => setModalShow(false)} />
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
              <tr key={item._id} className="bg-light border p-3">
                <td className="h4">{item.name}</td>
                {item.completed ? <td>✔️</td> : <td>❌</td>}
                <td>
                  <Button variant="light">✏️</Button>
                </td>
                <td>
                  <Button variant="light" onClick={() => setModalShow(true)}>
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
