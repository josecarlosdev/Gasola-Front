import http from "../http-common";

const getAll = () => {
  return http.get("/abastecimento");
};

const get = id => {
  return http.get(`/abastecimento/${id}`);
};

const create = data => {
  return http.post("/abastecimento", data);
};

const update = (id, data) => {
  return http.put(`/abastecimento/${id}`, data);
};

const remove = id => {
  return http.delete(`/abastecimento/${id}`);
};

const removeAll = () => {
  return http.delete(`/abastecimento`);
};

const findByName = name => {
  return http.get(`/abastecimento?name=${name}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByName,
};
