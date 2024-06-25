import http from "../http-common";

class SheetDataService {
  getAll() {
    return http.get("/sheets");
  }

  get(id) {
    return http.get(`/sheets/${id}`);
  }

  create(data) {
    return http.post("/sheets", data);
  }

  update(id, data) {
    return http.put(`/sheets/${id}`, data);
  }

  delete(id) {
    return http.delete(`/sheets/${id}`);
  }

  findByName(name) {
    return http.get(`/sheets?name=${name}`);
  }
}

export default new SheetDataService();