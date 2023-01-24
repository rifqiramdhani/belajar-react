import axios from "../../Config/http-common";

const getAll = () => {
    return axios.get('/users');
}

const get = id => {
    return axios.get(`/users/${id}`);
}

const create = data => {
    return axios.post('/users/insert', data.user);
}

const update = (id, data) => {
    return axios.put(`/users/update/${id}`, data);
}
const remove = id => {
    // console.log(id)
    return axios.delete(`/users/delete/${id}`);
}

const ApiService = {
    getAll,
    get,
    create,
    update,
    remove
}

export default ApiService;