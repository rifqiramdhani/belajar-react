import React from 'react'
import { useNavigate } from 'react-router-dom';

const LogoutComponent = () => {

    const navigate = useNavigate();

    const logoutMethod = () => {
        localStorage.clear("token");
        navigate('/')
    }

    return (
        <div>
            <li className="nav-item">
                <button onCLick={logoutMethod} className="nav-link">
                    <i className="bi bi-grid"></i><span>Logout</span>
                </button>
            </li>
        </div>
    )
}

export default LogoutComponent
