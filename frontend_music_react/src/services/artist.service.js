import http from "./http-common";


class ArtistDataService {
    //We call axios get, post, put, delete method corresponding to HTTP Requests

    getAll() {
      return http.get("/artists");
    }
    get(id) {
      return http.get(`/artist_detail/${id}`);
    }
    create(artistData) {
      return http.post("/createArtist", artistData);
    }
    /* 
    update(id, data) {
      return http.put(`/tutorials/${id}`, data);
    }
    delete(id) {
      return http.delete(`/tutorials/${id}`);
    }
    deleteAll() {
      return http.delete(`/tutorials`);
    } */
    findByArtistName(artistName) {
      return http.get(`/artist_detail?artistName=${artistName}`);
    }
  }
export default new ArtistDataService();