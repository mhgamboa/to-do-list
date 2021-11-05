import http from "../http-common.js";

class toDoDataService {
  getItems() {
    return http.get("/");
  }
}

export default new toDoDataService();
