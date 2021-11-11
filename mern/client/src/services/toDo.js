import http from "../http-common.js";

class toDoDataService {
  getItems() {
    return http.get("/");
  }

  deleteItem(data) {
    return http.delete("/", { data: data });
  }

  createItem(data) {
    return http.post("/", data);
  }
}

export default new toDoDataService();
