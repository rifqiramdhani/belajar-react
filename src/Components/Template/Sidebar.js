import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import LoginComponent from '../Button/LoginComponent';
import LogoutComponent from '../Button/LogoutComponent';

const Sidebar = (props) => {

    // const { state } = useLocation();
    // const { auth } = state;

    const [Auth, setAuth] = useState(Boolean(localStorage.getItem('login')))
    useEffect(() =>{
        setAuth(Boolean(localStorage.getItem('login')))
    })

    return (
        <div>
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <i className="bi bi-grid"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/employee" className="nav-link">
                            <i className="bi bi-grid"></i><span>Employee</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/calculator" className="nav-link">
                            <i className="bi bi-grid"></i><span>Calculator</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/user" className="nav-link">
                            <i className="bi bi-grid"></i><span>Users</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/userredux" className="nav-link">
                            <i className="bi bi-grid"></i><span>User Redux</span>
                        </Link>
                    </li>

                    {Auth ? <LogoutComponent /> : <LoginComponent />}
                    {/* {Auth ? <LoginComponent /> : <LogoutComponent />}  */}

                    <LogoutComponent/>
                </ul>
            </aside>
        </div>
    )
}

export default Sidebar
