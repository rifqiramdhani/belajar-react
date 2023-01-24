import axios from "axios";

// let token = localStorage.getItem('token');
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsidXNlcklkIjo4LCJ1c2VybmFtZSI6ImFkbWluIn0sImlhdCI6MTY3NDUzMzg1OSwiZXhwIjoxNjc0NTQxMDU5fQ.V62EZ1w-yAnjgYL1yaunqjzh6isZNG8SuUHTlBXIR2s";

export default axios.create({
    baseURL: "http://localhost:3005",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': token
    },
})