import http from "../http-common";

class OriginDataService {

    getAll() {
        return http.get("/origins");
    }

    get(id) {
        return http.get(`/origins/${id}`);
    }

    create(data) {
        return http.post("/origins", data);
    }

    update(id, data) {
        return http.put(`/origins/${id}`, data);
    }

    delete(id) {
        return http.delete(`/origins/${id}`);
    }

    findByType(type) {
        return http.get(`/origins?type=${type}`);
    }


}

export default new OriginDataService()