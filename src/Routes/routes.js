import React from "react";
import { Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import CalculatorProps from "../Components/CalculatorProps/CalculatorProps";
import Employee from "../Components/EmployeeComponent/Employee";
import ReqLogin from "../Components/Form/ReqLogin";
import Sidebar from "../Components/Template/Sidebar";
import UserComponent from "../Components/UserComponent/UserComponent";
import Home from "../Components/Home/Home";
import Header from "../Components/Template/Header";
import UserRedux from "../Components/UserComponent/UserRedux";
import AddUserRedux from "../Components/UserComponent/AddUserRedux";

const RoutesPath = () => {
    return(
        <BrowserRouter>
            <Header />
            <Sidebar />
            <Routes>
                <Route path="/login" element={<ReqLogin />}  />
                <Route path="/" element={<Home />} />
                <Route path="/calculator" element={<PrivateRoute><CalculatorProps /></PrivateRoute>} />
                <Route path="/employee" element={<PrivateRoute><Employee /></PrivateRoute>} />
                <Route path="/user" element={<PrivateRoute><UserComponent /></PrivateRoute>} />
                <Route path="/userredux" element={<PrivateRoute><UserRedux /></PrivateRoute>} />
                <Route path="/adduser" element={<PrivateRoute><AddUserRedux /></PrivateRoute>} />

            </Routes>
        </BrowserRouter>
    )
}

// untuk membuat private routes
const PrivateRoute = (props) => {
    const token = localStorage.getItem('token');

    console.log(token)
    if(!token) return <Navigate to="/login" />
    return props.children
}

export default RoutesPath;