import React from 'react'
import { useNavigate } from 'react-router-dom';

const LogoutComponent = () => {

    const navigate = useNavigate();

    const logoutMethod = () => {
        localStorage.removeItem("token");

        localStorage.setItem("login", false);

        navigate('/login', {state : { auth:false }})
    }

    return (
        <div>
            <li className="nav-item">
                <button type="button" onClick={logoutMethod} className="nav-link">
                    <i className="bi bi-grid"></i><span>Logout</span>
                </button>
            </li>
        </div>
    )
}

export default LogoutComponent
