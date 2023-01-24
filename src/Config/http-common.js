import axios from "axios";

let token = localStorage.getItem('token') ? localStorage.getItem('token').replace(/^["'](.+(?=["']$))["']$/, '$1') : '';
// let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsidXNlcklkIjo4LCJ1c2VybmFtZSI6ImFkbWluIn0sImlhdCI6MTY3NDU0MDYxNiwiZXhwIjoxNjc0NTQ3ODE2fQ.-p-ftzmpp_irzP4u2HTOwNuqIfZapBsA_lIGx9JfNlo";

export default axios.create({
    baseURL: "http://localhost:3005",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': token
    },
})