import http from "../http-common";

class ClasseDataService {
  getAll() {
    return http.get("/classes");
  }

  get(id) {
    return http.get(`/classes/${id}`);
  }

  create(data) {
    return http.post("/classes", data);
  }

  update(id, data) {
    return http.put(`/classes/${id}`, data);
  }

  delete(id) {
    return http.delete(`/classes/${id}`);
  }

  findByName(name) {
    return http.get(`/classes?name=${name}`);
  }
}

export default new ClasseDataService();
