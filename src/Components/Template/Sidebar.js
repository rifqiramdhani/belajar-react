import React from 'react'
import { Link } from 'react-router-dom';
import LoginComponent from '../Button/LoginComponent';
import LogoutComponent from '../Button/LogoutComponent';

const Sidebar = () => {

    const checkToken = (props) => {
        const token = localStorage.getItem('token');
        
    }

    return (
        <div>
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <i className="bi bi-grid"></i>
                            <span>Dashboard</span>
                        </a>
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


                    <LogoutComponent />

                </ul>
            </aside>
        </div>
    )
}

export default Sidebar
