import axios from "axios";


const url = "https://adduser-detail-app.herokuapp.com/users"

export const getUsers = async(id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addUsers = async(user) => {
    return await axios.post(url, user);
}
export const editUsers = async(id, user) => {
    return await axios.put(`${url}/${id}`, user);
}
export const deleteUser = async(id) => {
    return await axios.delete(`${url}/${id}`);
}